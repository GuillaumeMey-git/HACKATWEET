import styles from '../styles/SignUp.module.css';
import { useState } from 'react';



function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div className={styles.signUpContainer}>
            <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
            <h2>Create your Hackatweet account</h2>
            <input className={styles.input} type="text" placeholder="Firstname" id="signUpUsername" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUserName(e.target.value)} value={userName} />
            <input className={styles.input} type="text" placeholder="Password" id="signUpUsername" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className={styles.button}>Sign in</button>
            
        </div>
    );
}

export default SignUp;
