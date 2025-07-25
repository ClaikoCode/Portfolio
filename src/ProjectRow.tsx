// ProjectRow.tsx
import { useState, useRef } from "react";
import "./ProjectRow.css";

import arrowDown from './assets/icon-arrow-downward.svg'
import arrowUp from './assets/icon-arrow-upward.svg'

export type Project = {
	id: number;
	title: string;
	description: string;
	showcaseUrl: string;
	showcaseAlt: string;
	showcaseSource?: string; // Link to the source for the showcase.
	expandedDesc?: string;
	videoUrl: string;
}

type ProjectRowProps = {
	project: Project;
	isReversed?: boolean;
}

function ProjectRow({ project, isReversed = false }: ProjectRowProps) {
	const [expanded, setExpanded] = useState(false);
	const videoContainerRef = useRef<HTMLDivElement>(null);

	const containerClasses = "project-container" + (expanded ? " project-container--expanded" : "");
	const rowContentClasses = "project-content" + (isReversed ? " project-content--reversed" : "");
	const isYoutubeEmbedLink = project.videoUrl.includes('https://www.youtube.com/embed/');

	const showcaseImageElement = <img
		className="project-content__image"
		src={project.showcaseUrl}
		alt={project.showcaseAlt}
	/>

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
					{project.showcaseSource ? (
						<a href={project.showcaseSource} target="_blank">{showcaseImageElement}</a>
					) : (
						showcaseImageElement
					)}

					{project.videoUrl && (
						<div ref={videoContainerRef} className="video-container">
							{isYoutubeEmbedLink ? (
								<div className="video-container__embed-container">
									<iframe
										src={project.videoUrl + "?&mute=1"}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; web-share; fullscreen;"
									/>
								</div>

							) : (
								<video className="project-content__video" controls muted>
									<source src={project.videoUrl} type="video/mp4" />
								</video>
							)

							}

						</div>
					)}
				</div>
			</div>

			<div className="arrow-container">
				<button
					className="arrow-button"
					onClick={() => {
						setExpanded(!expanded)

						if (videoContainerRef.current) {
							const iframeElement = videoContainerRef.current.querySelector('iframe');
							const videoElement = videoContainerRef.current.querySelector('video');

							if (iframeElement) {
								const iframeSrc = iframeElement.src;
								iframeElement.src = iframeSrc;
							}
							else if (videoElement) {
								videoElement.pause();
							}
						}
					}}
					aria-label={expanded ? "Collapse" : "Expand"}
				>
					<img className={expanded ? 'rotated' : ""} src={arrowDown} />
				</button>
			</div>

		</div >
	);
}

export default ProjectRow;