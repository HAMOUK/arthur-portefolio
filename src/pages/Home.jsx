import ProjectCard from '../components/ProjectCard'
import projets from '../data/projets'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src="/couverture.png" alt="Portfolio Arthur Hanquet" />
      </section>
      
      <section className="projects-section">
        <h2 className="section-title">Projets</h2>
        <main>
          {projets.map(projet => (
            <ProjectCard
              key={projet.id}
              id={projet.id}
              titre={projet.titre}
              description={projet.descriptionCourte}
              imageCover={projet.imageCover}
            />
          ))}
        </main>
      </section>
    </div>
  )
}

export default Home