import styles from '../styles/Hashtag.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../reducers/hashtag';


function Hashtag(props) {
    const dispatch = useDispatch();

    const handlehashtagClick = () =>{
        dispatch(add({ hashtag: props.hashtag }));
        window.location.href = '/homeHashtag';  
    }


    const plusriels = `${props.compteur} ${props.compteur === "1" ? "Tweet" : "Tweets"}`;

    return (
        <div className={styles.hashtag} onClick={() => handlehashtagClick()}>
            <h3 className={styles.h3}>{props.hashtag}</h3>
            <p className={styles.p}>{plusriels}</p>
        </div>
    );
}

export default Hashtag;