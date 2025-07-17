import styles from '../styles/SignUp.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'


function SignUp() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: firstName, username: userName, password: password }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: userName, token: data.token }));
				}
			});
	};

    return (
        <div className={styles.signUpContainer}>
            <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
            <h2>Create your Hackatweet account</h2>
            <input className={styles.input} type="text" placeholder="Firstname" id="signUpUsername" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setUserName(e.target.value)} value={userName} />
            <input className={styles.input} type="text" placeholder="Password" id="signUpUsername" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className={styles.button} onClick={() => handleRegister()}>Sign in</button>  
        </div>
    );
}

export default SignUp;
