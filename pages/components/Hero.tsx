import React, { useState, useEffect } from "react";
import styles from "../../styles/Hero.module.scss";
import dynamic from "next/dynamic";

const DynamicCloud = dynamic(() => import("./Cloud"), { ssr: false });

function Hero (): JSX.Element {
    const [clouds, setClouds] = useState<any>([]);

    useEffect(() => {
        generateClouds();
    }, []);

    function generateClouds() {
        for (let i = 0; i < 10; i++) {
            let randomSeed = Math.floor(Math.random() * 100)* .01;
            setTimeout(() => {
                setClouds((prevClouds: any) =>[...prevClouds,
                    <DynamicCloud
                        key={i}
                        size={`${randomSeed}px`}
                        color={'whitesmoke'}
                        speed={`${randomSeed * 15}s`}
                        opacity={randomSeed}
                        top={`${100 - randomSeed * 100}%`}
                    />]);
            }, randomSeed * 10000);
        }
        return clouds;
    }

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Code is creativity.</h1>
            <p className={styles.p}> or insert other cheesy line here</p>
            <div className={styles.cloudContainer}>
                {clouds}
            </div>

        </section>
    )
}

export default Hero;