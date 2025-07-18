import styles from '../styles/NavContent.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/user'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// ajouter firstname au redux

function NavContent() {

    const user = useSelector((state)=>state.user.value);
    const dispatch = useDispatch();
    const verslogout = () =>{
        console.log("dans fct")
        dispatch(logout())        
    }



    return (
        <div className={styles.content}>  
            <Link href="home">
                <img className={styles.logo} src='/logofondnoir.png' alt='imageAccueil' />
            </Link>
            <div className={styles.bas}>

                <div className={styles.identity}>
                    <div> <FontAwesomeIcon icon={faUser} className={styles.logoUser}/></div>
                    <div className={styles.noms}>
                        {user.firstname} <br></br>
                        @ {user.username}
                    </div>
                </div>
                <button className={styles.button} onClick={() => verslogout()}>Logout</button>

            </div>
        </div>
    )
}

export default NavContent;
