import styles from '../styles/HashtagContent.module.css';

// faire fetch
// faire composant d'affichage de # + compteur
// faire affichage de tweet qui corresponds au # quand on click dessus

fetch('http://localhost:3000/hashtags')
.then(response=>response.json())
.then(data => console.log("trends: ",data.hashtag))

function HashtagContent() {
    return (
        <div className={styles.hashtagContaine}>
            <h2 className={styles.h2}>Trends</h2>
            <div className={styles.hashtagList}>

                // faire un composant
                <p>#test</p>
                <p>1 tweet</p>

                <p>#test</p>
                <p>2 tweet</p>
            </div>
        </div>
    )
}

export default HashtagContent;
