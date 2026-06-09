import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/layout'
import { Inicio, Nosotros, Contactos, Noticias, PersonajesPage } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/personajes" element={<PersonajesPage />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
