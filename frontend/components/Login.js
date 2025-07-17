import { useState } from 'react';
import styles from '../styles/Login.module.css';
import { Modal } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {
    const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);      

    // ---- sign In

    const showModalSignUp = () => {
        console.log('click')
        setIsModalSignUpOpen(true);
    };

    const handleOk = () => {
        setIsModalSignUpOpen(false);
    };

    const handleCancel = () => {
        setIsModalSignUpOpen(false);
    };

    // ---- sign In

        const showModalSignIn = () => {
        console.log('click')
        setIsModalSignInOpen(true);
    };

    const handleOkIn = () => {
        setIsModalSignInOpen(false);
    };

    const handleCancelIn = () => {
        setIsModalSignInOpen(false);
    };


    return (
        <div className={styles.container}>
            <img className={styles.image} src='/imageAccueil.png' alt='imageAccueil' />
            <div className={styles.textContainer}>
                <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
                <h1 className={styles.h1}>See what's <br /> happening</h1>
                <h2 className={styles.h2}>Join Hackatweet today.</h2>
                
                <button className={styles.signup} onClick={showModalSignUp}>Sign up</button>
                
                <p className={styles.p}>Already have an account?</p>
                <button className={styles.signin} onClick={showModalSignIn}>Sign in</button>
            </div>

            <Modal
                title={null}
                visible={isModalSignUpOpen} 
                onOk={handleOkIn}
                onCancel={handleCancel}
                closable={true}
                footer={null}
                wrapClassName={styles.customModal}
            >
                <SignUp></SignUp>
            </Modal>


            <Modal
                title={null}
                visible={isModalSignInOpen} 
                onOk={handleOk}
                onCancel={handleCancelIn}
                closable={true}
                footer={null}
                wrapClassName={styles.customModal}
            >
                <SignIn></SignIn>
            </Modal>

        </div>
    );
}

export default Login;
