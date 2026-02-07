import { useState } from 'react'
import { Link } from 'react-router-dom'
import projets from '../data/projets'
import './Nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Arthur Hanquet</Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="nav-link">Projets ▾</span>
            
            {isOpen && (
              <div className="dropdown-menu">
                {projets.map(projet => (
                  <Link 
                    key={projet.id} 
                    to={`/projet/${projet.id}`}
                    className="dropdown-item"
                  >
                    {projet.titre}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav