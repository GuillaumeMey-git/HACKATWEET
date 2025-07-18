import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Tweets(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(null);

  const handleLikeTweet = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  const handleDeleteTweet = (tweetId) => {
    fetch(`http://localhost:3000/tweets/${tweetId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result && props.onDelete) {
          props.onDelete();
        }
      });
  };
  console.log(props);

  return (
    <div className={styles.tweet_card}>
      <p className={styles.tweet_message}>{props.data.message}</p>
      <FontAwesomeIcon
        icon={faTrashCan}
        className={styles.deleteIcon}
        onClick={() => handleDeleteTweet(props.data._id)}
      />
      <FontAwesomeIcon
        icon={faHeart}
        onClick={() => handleLikeTweet()}
        style={{
          color: isLiked === true ? "#e74c3c" : "#aaaaaa",
          cursor: "pointer",
        }}
        className={styles.like}
      />
      <p>({count ?? 0})</p>
    </div>
  );
}

export default Tweets;
