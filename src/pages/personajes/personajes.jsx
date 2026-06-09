import { useEffect, useState } from "react";
import { obtenerPersonajes } from "../../services/rick-and-morty-service";
import { PersonajeCard } from "../../components/personaje-card";
import styles from "./personajes.module.css";

export function PersonajesPage() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        obtenerPersonajes().then((data) => setPersonajes(data.results));
    }, []);

    return (
        <div className={styles.personajes}>
            <h1 className={styles.titulo}>Personajes de Rick and Morty</h1>
            <div className={styles.grid}>
                {personajes.map((p) => (
                    <PersonajeCard
                        key={p.id}
                        imagen={p.image}
                        nombre={p.name}
                        especie={p.species}
                    />
                ))}
            </div>
        </div>
    );
}
