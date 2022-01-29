import React from "react";
import styles from "../../styles/Home.module.scss";

interface CloudProps {
    size: string,
    color: string,
    speed: string,
    opacity: number,
    top: string,
}

function Cloud({size, color, speed, opacity, top}: CloudProps): JSX.Element {
    const style = {
        '--size': size,
        '--color': color,
        '--speed': speed,
        '--cloud-opacity': opacity,
        '--top': top,
    } as React.CSSProperties;

    return <div
        className={styles.cloud}
        style={style}
    />
}

export default Cloud;