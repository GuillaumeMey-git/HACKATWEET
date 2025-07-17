import styles from '../styles/SignIn.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'


function SignIn() {
    const dispatch = useDispatch();
    const [userNameSignIn, setUserNameSignIn] = useState('')
    const [passwordSignIn, setPasswordSignIn] = useState('')
	const handleConnection = () => {

		fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: userNameSignIn, password: passwordSignIn }),
		}).then(response => response.json())
			.then(data => {
                console.log(data)
				if (data.result) {
					dispatch(login({ username: userNameSignIn, token: data.token }));
                    window.location.href = '/home';
				}
			});
	};


    return (
        <div className={styles.signUpContainer}>
            <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
            <h2>Create your Hackatweet account</h2>
            <input className={styles.input} type="text" placeholder="Username"  onChange={(e) => setUserNameSignIn(e.target.value)} value={userNameSignIn} />
            <input className={styles.input} type="password" placeholder="Password"  onChange={(e) => setPasswordSignIn(e.target.value)} value={passwordSignIn} />
            <button className={styles.button} onClick={() => handleConnection()}>Sign in</button>  
        </div>
    );
}

export default SignIn;