import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faEyeSlash,
  faTrashCan,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Tweets from "./Tweets";

function Home(props) {
  const [content, setContent] = useState("");
  const [tweets, setTweets] = useState([]);

  const max_caracters = 280;

  const inputMaxContent = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= max_caracters) {
      setContent(inputValue);
    }
  };

  const fetchTweets = () => {
    fetch("http://localhost:3000/tweets/")
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setTweets(data.tweets);
          console.log("Tweets :", data.tweets);
        }
      });
  };

  const handleTweet = () => {
    fetch("http://localhost:3000/tweets/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: content }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log("New tweet:", data.tweetData);
          setContent("");
          fetchTweets();
        }
      });
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.first_container}>
          <h1 className={styles.h1_homepage}>Home</h1>
          <div className={styles.input_container}>
            <input
              className={styles.input_homepage}
              placeholder="What's up ?"
              onChange={inputMaxContent}
              value={content}
            ></input>
          </div>
          <div className={styles.button_character}>
            <p className={styles.characterCounter}>
              {content.length}/{max_caracters}
            </p>
            <button onClick={handleTweet} className={styles.button_tweet}>
              Tweet
            </button>
          </div>

          <div className={styles.tweets_list_container}>
            {tweets.length > 0 ? (
              tweets.map((tweet, i) => <Tweets key={i} data={tweet} onDelete={fetchTweets}/>)
            ) : (
              <p>No tweets</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
