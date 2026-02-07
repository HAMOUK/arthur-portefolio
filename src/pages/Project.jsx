import { useParams, Link } from "react-router-dom"
import Header from "../components/Header"
import projets from "../data/projets"
import '../App.css'
import './Project.css'

function Project() {
  const { id } = useParams()
  const projet = projets.find(p => p.id === parseInt(id))

  if (!projet) {
    return <div className='app'>Projet non trouvé</div>
  }

  return (
    <div className='app'>
      <Header />
      <main className="project-detail">
        <Link to="/" className="back-link">← Retour aux projets</Link>
        
        <div className="project-header">
          <h2>{projet.titre}</h2>
          {projet.sousTitre && <p className="sous-titre">{projet.sousTitre}</p>}
        </div>
        
        <img src={projet.image} alt={projet.titre} className="project-image" />
        
        <p className="project-description">{projet.descriptionLongue}</p>
      </main>
    </div>
  )
}

export default Project