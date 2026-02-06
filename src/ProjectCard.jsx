import './ProjectCard.css'

function ProjectCard(props) {
	return (
		<article className='project-card'>
			<h2>{props.titre}</h2>
			<p>{props.description}</p>
		</article>
	)
}

export default ProjectCard