import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import React from "react";
import Hero from "./components/Hero";

const Home: NextPage = () => {


    return (
        <main className={styles.main}>
            <Hero />
            <div>
                <h1>Skills</h1>
            </div>
        </main>
    )
}

export default Home
