import styles from '../styles/TweetContentHashtag.module.css';
import { useState, useEffect } from "react"; // <--- IMPORTEZ useEffect !

function TweetContent() {

    // faire le lien page avant + redux
    // style de tweets
    // faire un filtre et fetch tous les tweets
    // display les tweets



    return (
        <div className={styles.main}>
            <div className={styles.serchContent}>
                <h2 className={styles.h2}>Hashtag</h2>
                <input className={styles.input}></input>
            </div>
            <div className={styles.tweetContainer}>

            </div>

        </div>
    );
}

export default TweetContent;