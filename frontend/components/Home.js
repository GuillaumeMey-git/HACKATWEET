import styles from "../styles/Home.module.css";
import { useState } from "react";

function Home() {
  const [content, setContent] = useState("");

  const max_caracters = 280;

  const inputMaxContent = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= max_caracters) {
      setContent(inputValue);
    }
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
          console.log("Tweet posté avec succès :", data.tweetData);
          setContent("");
        }
      });
  };
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
            <button className={styles.button_tweet} onClick={handleTweet}>
              Tweet
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
