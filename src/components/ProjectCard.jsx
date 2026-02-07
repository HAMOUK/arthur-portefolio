import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard(props) {
  return (
    <Link to={`/projet/${props.id}`} className='project-card-link'>
      <article className='project-card'>
        <div className='project-image'>
          <img src={props.imageCover} alt={props.titre} />
        </div>
        <div className='project-info'>
          <h2>{props.titre}</h2>
          <p>{props.description}</p>
        </div>
      </article>
    </Link>
  )
}

export default ProjectCard