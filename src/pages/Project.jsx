import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import projets from "../data/projets"
import '../App.css'
import './Project.css'

function Project() {
  const { id } = useParams()
  const projet = projets.find(p => p.id === parseInt(id))
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!projet) {
    return <div className='app'>Projet non trouvé</div>
  }

  const openLightbox = (index) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextImage = (e) => {
    if (e) e.stopPropagation()
    setLightboxIndex((lightboxIndex + 1) % projet.images.length)
  }

  const prevImage = (e) => {
    if (e) e.stopPropagation()
    setLightboxIndex((lightboxIndex - 1 + projet.images.length) % projet.images.length)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      
      if (e.key === "ArrowRight") {
        nextImage()
      } else if (e.key === "ArrowLeft") {
        prevImage()
      } else if (e.key === "Escape") {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxIndex])

  return (
    <div className='app'>
      <main className="project-detail">
        <Link to="/" className="back-link">← Retour aux projets</Link>
        
        <div className="project-content">
          <div className="project-left">
            <div className="project-header">
              <h2>{projet.titre}</h2>
              {projet.sousTitre && <p className="sous-titre">{projet.sousTitre}</p>}
            </div>
            <p className="project-description">{projet.descriptionLongue}</p>
          </div>
          
          <div className="project-right">
            <div className="project-gallery">
              {projet.images.map((image, index) => (
                <figure 
                  key={index} 
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.src} alt={image.legende} />
                  <figcaption>{image.legende}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-arrow lightbox-prev" onClick={prevImage}>‹</button>
          <div className="lightbox-content">
            <img src={projet.images[lightboxIndex].src} alt={projet.images[lightboxIndex].legende} />
            <p>{projet.images[lightboxIndex].legende}</p>
            <span className="lightbox-counter">{lightboxIndex + 1} / {projet.images.length}</span>
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={nextImage}>›</button>
          <span className="lightbox-close" onClick={closeLightbox}>×</span>
        </div>
      )}
    </div>
  )
}

export default Project