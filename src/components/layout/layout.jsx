import React from "react";
import Header from "../header/header";
import Footer from "../Footer/footer";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
