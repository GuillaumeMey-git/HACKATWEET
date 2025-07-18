import styles from '../styles/HashtagContent.module.css';

// faire route
// faire fetch
// faire composant de recherche
// faire composant d'affichage de # + compteur
// faire affichage de tweet qui corresponds au # quand on click dessus

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
