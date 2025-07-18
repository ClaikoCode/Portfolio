// ProjectRow.tsx
import { useState } from "react";
import "./ProjectRow.css";

import arrowDown from './assets/icon-arrow-downward.svg'
import arrowUp from './assets/icon-arrow-upward.svg'

export type Project = {
	id: number;
	title: string;
	description: string;
	showcaseUrl: string;
	showcaseAlt: string;
	expandedDesc?: string;
	videoUrl: string;
}

type ProjectRowProps = {
	project: Project;
	isReversed?: boolean;
}

function ProjectRow({ project, isReversed = false }: ProjectRowProps) {
	const [expanded, setExpanded] = useState(false);

	const containerClasses = "project-container" + (expanded ? " project-container--expanded" : "");
	const rowContentClasses = "project-content" + (isReversed ? " project-content--reversed" : "");

	return (
		<div className={containerClasses}>
			<div className={rowContentClasses}>
				<div className="project-content__text">
					<h2>{project.title}</h2>
					<p className="project-content__desc">{project.description}</p>

					{project.expandedDesc && (
						<div className="expanded-content">
							<hr />
							<p>{project.expandedDesc}</p>
						</div>
					)}
				</div>

				<div className="project-content__showcase">
					<img
						className="project-content__image"
						src={project.showcaseUrl}
						alt={project.showcaseAlt}
					/>

					{project.videoUrl && (
						<div className="video-container">
							<video className="project-content__video" controls muted>
								<source src={project.videoUrl} type="video/mp4" />
							</video>
						</div>
					)}
				</div>
			</div>

			<div className="arrow-container">
				<button
					className="arrow-button"
					onClick={() => setExpanded(!expanded)}
					aria-label={expanded ? "Collapse" : "Expand"}
				>
					<img className={expanded ? 'rotated' : ""} src={arrowDown} />
				</button>
			</div>

		</div>
	);
}

export default ProjectRow;