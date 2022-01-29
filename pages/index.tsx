import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Cloud from "./components/Cloud";
import React from "react";

const Home: NextPage = () => {

    function generateClouds() {
        let clouds = [];

        for (let i = 0; i < 10; i++) {
            let randomSeed = Math.floor(Math.random() * 100)* .01;
            clouds.push(
                <Cloud
                    key={i}
                    size={`${randomSeed}px`}
                    color={'whitesmoke'}
                    speed={`${randomSeed * 15}s`}
                    opacity={randomSeed}
                    top={randomSeed * 4.5}
                />
            );
        }
        return clouds;
    }

    const clouds = generateClouds();

    return (
    <main className={styles.main} style={{overflowX: "hidden"}}>
        {clouds.map(cloud => cloud)}
    </main>
    )
}

export default Home
