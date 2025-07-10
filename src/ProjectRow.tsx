import "./ProjectRow.css"

export type Project = {
    id: number;
    title: string;
    description: string;
    showcaseUrl: string;
    showcaseAlt: string;
}

type ProjectRowProps = {
    project: Project;
    isReversed?: boolean;
}

function ProjectRow({project, isReversed = false}: ProjectRowProps) {
    const projectRowClassName = "project-row " + (isReversed ? "project-row--reversed" : "")

    return (
        <div className={projectRowClassName}>
            <div className="project-row__text">
                <h2>{project.title}</h2>
                <p className="project-row__desc">{project.description}</p>
            </div>

            <div className="project-row__showcase">
                <img src={project.showcaseUrl} alt={project.showcaseAlt} className="project-row__media" />
            </div>
        </div>
    )
}

export default ProjectRow