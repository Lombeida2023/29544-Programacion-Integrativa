import PropTypes from "prop-types";
import styles from "./concepto-card.module.css";

export function ConceptoCard({ imagen, titulo, descripcion }) {
    return (
        <div className={styles.card}>
            <img src={imagen} alt={titulo} className={styles.imagen} />
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
        </div>
    );
}

ConceptoCard.propTypes = {
    imagen: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};
