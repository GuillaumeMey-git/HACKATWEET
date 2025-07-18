import styles from '../styles/TweetContentHashtag.module.css';
import { useState } from "react"; 
import { useSelector } from 'react-redux';

function TweetContent() {


    // faire un filtre et fetch tous les tweets
    // display les tweets   

    const hashtag = useSelector((state)=>state.hashtag.value);
    const [inputContent, setInputContent] = useState(hashtag.hashtag.hashtag)


    

		// fetch('http://localhost:3000/hashtags', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ hashtag: inputContent }),
		// }).then(response => response.json())
		// 	.then(data => {console.log(data)})


    return (
        <div className={styles.mainn}>
            <div className={styles.serchContent}>
                <h2 className={styles.h2}>Hashtag</h2>
                <input className={styles.input} onChange={(e) => setInputContent(e.target.value)} value={inputContent}></input>
            </div>
            <div className={styles.tweetContainer}>

            </div>

        </div>
    );
}

export default TweetContent;