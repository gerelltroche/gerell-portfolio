import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import React from "react";
import dynamic from "next/dynamic";

const DynamicCloud = dynamic(() => import("./components/Cloud"), { ssr: false });

const Home: NextPage = () => {

    function generateClouds() {
        let clouds = [];

        for (let i = 0; i < 10; i++) {
            let randomSeed = Math.floor(Math.random() * 100)* .01;
            clouds.push(
                <DynamicCloud
                    key={i}
                    size={`${randomSeed}px`}
                    color={'whitesmoke'}
                    speed={`${randomSeed * 15}s`}
                    opacity={randomSeed}
                    top={`${100 - randomSeed * 100}%`}
                />
            );
        }
        return clouds;
    }

    const clouds = generateClouds();

    return (
    <main className={styles.main}>
        <div style={{zIndex: 1}}>
            {clouds}
        </div>
        <h1 style={{
            textAlign: "center",
            marginTop: "10vh",
            zIndex: 10,
        }}>Do Be Cloudy</h1>
    </main>
    )
}

export default Home
