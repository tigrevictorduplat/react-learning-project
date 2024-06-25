import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <header className={styles.navHeader}>
        <ul className={styles.nav}>
            <li className={styles.navLink}>
                <Link  to="../"><FaHome/></Link>
            </li>
        </ul>
        </header>
    )
}

export default Navbar