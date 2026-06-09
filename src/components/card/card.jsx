import styles from "./card.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export function Card({ nombre, edad }) {
  const [mostrarEdad, setMostrarEdad] = useState(true);

  return (
    <div className={styles.cardWrapper}>
      <h1 className={styles.title}>{nombre}</h1>

      {mostrarEdad && (
        <>
          <h2>Edad: {edad}</h2>

          <h3>
            {edad >= 18
              ? "Es mayor de edad"
              : "No es mayor de edad"}
          </h3>
        </>
      )}

      <button className={styles.button} onClick={() => setMostrarEdad(!mostrarEdad)}>
        {mostrarEdad ? "Ocultar edad" : "Mostrar edad"}
      </button>

    </div>
  );
}

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
};