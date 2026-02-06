import Header from './Header'
import ProjectCard from './ProjectCard'
import './App.css'

const projets = [
  {
    id: 1,
    titre: "Le Woluwe Chip",
    description: "Réhabilitation d'un bâtiment de bureaux de 1800m² en logements. L'enjeu principal réside dans l'apport de lumière naturelle."
  },
  {
    id: 2,
    titre: "La Clairière",
    description: "Centre d'accueil pour enfants favorisant l'autonomie et le développement."
  },
  {
    id: 3,
    titre: "Le Surplomb",
    description: "Projet de logements sur un site industriel, végétalisant le site tout en limitant l'impact bâti."
  },
  {
    id: 4,
    titre: "Vallée de la Sambre",
    description: "Infrastructure touristique renforçant la résilience du paysage face aux crises climatiques."
  },
  {
    id: 5,
    titre: "Dessins et travaux divers",
    description: "Croquis, esquisses et explorations graphiques."
  }
]

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        {projets.map(projet => (
          <ProjectCard
            key={projet.id}
            titre={projet.titre}
            description={projet.description}
          />
        ))}
      </main>
    </div>
  )
}

export default App