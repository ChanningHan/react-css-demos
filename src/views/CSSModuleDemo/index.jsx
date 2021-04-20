import React from 'react';
import styles from "./index.module.scss"

export default function CSSModuleDemo() {
    return <>
        <div className={styles.box}>
            <h1 className={styles['t-title']}>CSS Solutions For React</h1>
            <p className={styles.description}>CSSModuleDemo</p>
        </div>
    </>
}
