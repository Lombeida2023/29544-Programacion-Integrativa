import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './UserCard.module.css'

export function UserCard({ nombre, url, edad, activo = true }) {
  const [isActive, setIsActive] = useState(activo)

  return (
    <article className={styles.article}>
      <h2>Hola Soy {nombre}</h2>
      <p>
        Perfil: <a href={url} target="_blank" rel="noreferrer">{url}</a>
      </p>
      {edad !== undefined && <p>Edad: {edad}</p>}
      <p>{isActive ? 'Usuario activo' : 'Usuario inactivo'}</p>
      <button className={styles.button} type="button" onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Desactivar usuario' : 'Activar usuario'}
      </button>
    </article>
  )
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  edad: PropTypes.number,
  activo: PropTypes.bool,
}
