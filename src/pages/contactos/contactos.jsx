import React, { useState } from "react";
import styles from "./contactos.module.css";

export const Contactos = () => {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <div className={styles.contactos}>
            <h1>Contacto</h1>
            <p>¿Tienes alguna consulta? Escríbenos y te responderemos a la brevedad.</p>

            {enviado ? (
                <p className={styles.contactosOk}>¡Mensaje enviado! Nos pondremos en contacto pronto.</p>
            ) : (
                <form className={styles.contactosForm} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Tu nombre" required />
                    <input type="email" placeholder="Tu correo" required />
                    <textarea placeholder="Tu mensaje" rows="4" required />
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
}
