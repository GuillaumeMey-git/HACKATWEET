import { useState } from 'react';
import styles from '../styles/Login.module.css';
import { Modal } from 'antd';
import SignUp from './SignUp';

function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        console.log('click')
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src='/imageAccueil.png' alt='imageAccueil' />
            <div className={styles.textContainer}>
                <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
                <h1 className={styles.h1}>See what's <br /> happening</h1>
                <h2 className={styles.h2}>Join Hackatweet today.</h2>
                
                <button className={styles.signup} onClick={showModal}>Sign up</button>
                
                <p className={styles.p}>Already have an account?</p>
                <button className={styles.signin}>Sign in</button>
            </div>

            <Modal
            visible={isModalOpen}
            title={null}
            footer={null}
            closable={false}
            wrapClassName={styles.customModal}
            style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none' }}
            >
                <SignUp></SignUp>
            </Modal>

        </div>
    );
}

export default Login;
