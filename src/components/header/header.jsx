import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Programacion Integrativa de componentes Web</h2>
            <nav className={styles.nav}>
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/contactos">Contacto</Link>
                <Link to="/noticias">Noticias</Link>
                <Link to="/personajes">Personajes</Link>
            </nav>
        </header>
    );
}

export default Header;