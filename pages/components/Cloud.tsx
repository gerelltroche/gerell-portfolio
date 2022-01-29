import React from "react";
import styles from "../../styles/Home.module.css";

interface CloudProps {
    size: string,
    color: string,
    speed: string,
}

function Cloud({size, color, speed}: CloudProps): JSX.Element {
    const style = {
        '--size': size,
        '--color': color,
        '--speed': speed
    } as React.CSSProperties;

    return <div
        className={styles.cloud}
        style={style}
    />
}

export default Cloud;