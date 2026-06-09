import styles from "./Inicio.module.css";
import { ConceptoCard } from "../../components/concepto-card";

const conceptos = [
    {
        imagen: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80",
        titulo: "Componentes",
        descripcion: "Los componentes son bloques reutilizables que encapsulan interfaz, lógica y estilos en una sola unidad.",
    },
    {
        imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
        titulo: "Props",
        descripcion: "Las props permiten pasar datos de un componente padre a sus hijos, haciendo los componentes configurables.",
    },
    {
        imagen: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80",
        titulo: "Hooks",
        descripcion: "Los hooks como useState y useEffect permiten manejar estado y efectos secundarios en componentes funcionales.",
    },
];

export const Inicio = () => {
    return (
        <div className={styles.inicio}>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1>Programación de <span>Componentes Web</span></h1>
                    <p>
                        Aprende a construir interfaces modernas con React.
                        Componentes reutilizables, estado dinámico y navegación entre páginas.
                    </p>
                    <a href="/nosotros" className={styles.heroBtn}>Conoce más</a>
                </div>
                <img
                    className={styles.heroImg}
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                    alt="Programación web"
                />
            </section>

            <section className={styles.conceptos}>
                <h2 className={styles.conceptosTitulo}>Conceptos clave de React</h2>
                <div className={styles.conceptosGrid}>
                    {conceptos.map((c) => (
                        <ConceptoCard key={c.titulo} imagen={c.imagen} titulo={c.titulo} descripcion={c.descripcion} />
                    ))}
                </div>
            </section>
        </div>
    );
};
