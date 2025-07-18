import styles from '../styles/HashtagContent.module.css';
import { useState } from 'react';
import Hashtag from './Hashtag';


// faire composant d'affichage de # + compteur
// faire affichage de tweet qui corresponds au # quand on click dessus


function HashtagContent() {

    const [hashtagData, setHashtagData] = useState([]);

    fetch('http://localhost:3000/hashtags')
        .then(response=>response.json())
        .then(data => {
            setHashtagData(data.hashtag);
            console.log("ici: ",data.hashtag.compteur)
    })

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
