import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    const anioActual = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>Derechos reservados © <span>ESPE</span> {anioActual} — Programación Integrativa de Componentes Web</p>
        </footer>
    );
}

export default Footer;
