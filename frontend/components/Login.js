import styles from '../styles/Login.module.css';

function Login() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src='/imageAccueil.png' alt='imageAccueil'/>
            <div className={styles.textContainer}>
                <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil'/>
                <h1 className={styles.h1}>See what's <br></br>happening</h1>
                <h2 className={styles.h2}>Join Hackatweet today.</h2>
                <button className={styles.signup}>Sign up</button>
                <p className={styles.p}>Already have an account?</p>
                <button className={styles.signin}>Sign in</button>                
            </div>
            

        </div>
    );
}

export default Login;