import ProjectRow, { type Project } from './ProjectRow'

import './PortfolioProjects.css'

// Put 1 for true and 0 for false.
const startTextOnLeft = 1;

type PortfolioProjectsProps = {
	items: Project[];
}

function PortfolioProjects({ items }: PortfolioProjectsProps) {
	return (
		<div className='projects' id='projects'>
			<h1 className='projects__project-title'>List of Projects</h1>
			{items.map((project, index) => (
				<ProjectRow
					key={project.id}
					project={project}
					isReversed={index % 2 === startTextOnLeft}
				/>
			))}
		</div>
	)
}

export default PortfolioProjects