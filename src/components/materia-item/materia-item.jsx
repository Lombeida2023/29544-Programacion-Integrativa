import PropTypes from "prop-types";
import styles from "./materia-item.module.css";

export function MateriaItem({ icono, nombre, descripcion }) {
    return (
        <div className={styles.item}>
            <span className={styles.icono}>{icono}</span>
            <div className={styles.texto}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
            </div>
        </div>
    );
}

MateriaItem.propTypes = {
    icono: PropTypes.element.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};
