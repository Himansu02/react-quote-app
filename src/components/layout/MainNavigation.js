import { NavLink } from "react-router-dom"
import styles from "./MainNavigation.module.css"


const MainNavigation=()=>{
    return <header className={styles.header}>
        <div className={styles.logo}>Logo.</div>
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to="/quotes" className={navData=>navData.isActive ? styles.active:''}>All Quotes</NavLink></li>
                <li><NavLink to="/new-quote" className={navData=>navData.isActive ? styles.active:''}>New Quotes</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation