import styles from '../styles/SignIn.module.css';
import { useState } from 'react';

function SignIn() {
    const [userNameSignIn, setUserNameSignIn] = useState('')
    const [passwordSignIn, setPasswordSignIn] = useState('')
    return (
        <div className={styles.signUpContainer}>
            <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
            <h2>Create your Hackatweet account</h2>
            <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUserNameSignIn(e.target.value)} value={userNameSignIn} />
            <input className={styles.input} type="text" placeholder="Password" id="signUpUsername" onChange={(e) => setPasswordSignIn(e.target.value)} value={passwordSignIn} />
            <button className={styles.button}>Sign in</button>  
        </div>
    );
}

export default SignIn;