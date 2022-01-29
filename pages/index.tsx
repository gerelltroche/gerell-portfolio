import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Cloud from "./components/Cloud";
import React from "react";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
        <Cloud size={'.5px'} color={'whitesmoke'} speed={'20s'} />
        <Cloud size={'2px'} color={'whitesmoke'} speed={'10s'}/>
        <Cloud size={'3px'} color={'whitesmoke'} speed={'7s'}/>
    </main>
  )
}

export default Home
