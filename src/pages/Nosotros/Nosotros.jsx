import { FaCode, FaDatabase, FaNetworkWired, FaDesktop } from "react-icons/fa";
import { MateriaItem } from "../../components/materia-item";
import styles from "./Nosotros.module.css";

const materias = [
    {
        icono: <FaCode />,
        nombre: "Programación Integrativa",
        descripcion: "Desarrollo de aplicaciones web modernas integrando frameworks y librerías como React.",
    },
    {
        icono: <FaDatabase />,
        nombre: "Base de Datos",
        descripcion: "Diseño, implementación y administración de bases de datos relacionales y no relacionales.",
    },
    {
        icono: <FaNetworkWired />,
        nombre: "Redes de Computadoras",
        descripcion: "Fundamentos de redes, protocolos de comunicación y arquitecturas de red.",
    },
    {
        icono: <FaDesktop />,
        nombre: "Sistemas Operativos",
        descripcion: "Gestión de procesos, memoria, archivos y recursos del sistema operativo.",
    },
];

export const Nosotros = () => {
    return (
        <div className={styles.nosotros}>
            <div className={styles.nosotrosHeader}>
                <h1>Sobre Nosotros</h1>
                <p>Somos estudiantes de la ESPE apasionados por el desarrollo web y las tecnologías modernas.</p>
            </div>

            <div className={styles.materias}>
                {materias.map((m) => (
                    <MateriaItem key={m.nombre} icono={m.icono} nombre={m.nombre} descripcion={m.descripcion} />
                ))}
            </div>
        </div>
    );
};
