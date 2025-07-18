import styles from '../styles/Hashtag.module.css';
import { useState } from 'react';


function Hashtag(props) {


    // fonctionne pas 
    const plusriels = `${props.compteur} ${props.compteur === "1" ? "Tweet" : "Tweets"}`;

    return (
        <div className={styles.hashtag}>
            <h3 className={styles.h3}>{props.hashtag}</h3>
            <p className={styles.p}>{plusriels}</p>
        </div>
    );
}

export default Hashtag;