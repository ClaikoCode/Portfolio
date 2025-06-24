import "./ProjectRow.css"

function ProjectRow({project, isReversed = false}) {
    const projectRowClassName = "project-row " + (isReversed ? "project-row--reversed" : "")

    return (
        <div className={projectRowClassName}>
            <div className="project-row__text">
                <h3 className="project-row__title">{project.title}</h3>
                <p className="project-row__desc">{project.description}</p>
            </div>

            <div className="project-row__showcase">
                <img src={project.showcaseUrl} alt={project.showcaseAlt} className="project-row__media" />
            </div>
        </div>
    )
}

export default ProjectRow