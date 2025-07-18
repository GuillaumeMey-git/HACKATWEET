import styles from '../styles/HashtagContent.module.css';
import { useState, useEffect } from 'react';
import Hashtag from './Hashtag';


function HashtagContent() {

const [hashtagData, setHashtagData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/hashtags')
        .then(response => response.json())
        .then(data => {
            setHashtagData(data.hashtag);
        })
    }, []);

    const hashtagList = hashtagData.map((data, i) => {
        return <Hashtag key={i} {...data}/>;
    });


    return (
        <div className={styles.hashtagContaine}>
            <h2 className={styles.h2}>Trends</h2>
            <div className={styles.hashtagList}>

                {hashtagList}
                
            </div>
        </div>
    )
}

export default HashtagContent;
