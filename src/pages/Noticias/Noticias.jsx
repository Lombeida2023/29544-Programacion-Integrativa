import React from "react";
import styles from "./noticias.module.css";

const noticias = [
    {
        id: 1,
        titulo: "Lanzamiento del nuevo sitio web",
        fecha: "28 mayo 2026",
        descripcion: "Presentamos la nueva versión de nuestro sitio web con diseño moderno y mejor experiencia de usuario.",
    },
    {
        id: 2,
        titulo: "Colaboración con empresa tecnológica",
        fecha: "20 mayo 2026",
        descripcion: "Anunciamos una nueva alianza estratégica para desarrollar soluciones innovadoras en conjunto.",
    },
    {
        id: 3,
        titulo: "Artículo destacado en blog reconocido",
        fecha: "10 mayo 2026",
        descripcion: "Uno de nuestros artículos fue publicado y destacado en un blog de referencia en el sector.",
    },
];

export const Noticias = () => {
    return (
        <div className={styles.noticias}>
            <div className={styles.noticiasHeader}>
                <h1>Noticias</h1>
                <p>Últimas novedades y actualizaciones de nuestro proyecto.</p>
            </div>

            <div className={styles.noticiasLista}>
                {noticias.map((n) => (
                    <div key={n.id} className={styles.noticiaCard}>
                        <span className={styles.noticiaFecha}>{n.fecha}</span>
                        <h3>{n.titulo}</h3>
                        <p>{n.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
