import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css"
import MainNavigation from "./MainNavigation";
const Layout=()=>{
    return <Fragment>
        <MainNavigation></MainNavigation>
        <main className={styles.main}><Outlet></Outlet></main>
    </Fragment>
}

export default Layout;