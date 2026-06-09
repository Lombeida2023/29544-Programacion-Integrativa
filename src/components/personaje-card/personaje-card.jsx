import PropTypes from "prop-types";
import styles from "./personaje-card.module.css";

export function PersonajeCard({ imagen, nombre, especie }) {
    return (
        <div className={styles.card}>
            <img src={imagen} alt={nombre} className={styles.imagen} />
            <h3 className={styles.nombre}>{nombre}</h3>
            <p className={styles.especie}>{especie}</p>
        </div>
    );
}

PersonajeCard.propTypes = {
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    especie: PropTypes.string.isRequired,
};
