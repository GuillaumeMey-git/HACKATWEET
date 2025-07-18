import styles from '../styles/Home.module.css';
import NavContent from "./navContent";
import TweetContentHashtag from "./TweetContentHashtag";
import HashtagContent from "./hashtagContent";
import { useSelector } from 'react-redux';

function Home() {

    // redirection systematique vers login si pas authentifié
    const user = useSelector((state)=>state.user.value);
    if(!user.token){
        window.location.href = '/login';
    }


    return(
        <div className={styles.homeContainer}>
        <NavContent></NavContent>
        <TweetContentHashtag></TweetContentHashtag>
        <HashtagContent></HashtagContent>
        </div>    
    )

}

export default Home;
