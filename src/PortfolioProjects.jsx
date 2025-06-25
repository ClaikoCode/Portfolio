import ProjectRow from './ProjectRow.jsx'

import './PortfolioProjects.css'

const projects = [
  {
    id: 1,
    title: "Custom Game Engine",
    description: "A modern C++ game engine with advanced rendering pipeline, entity-component system, and cross-platform support.",
    showcaseUrl: "/vite.svg",
    showcaseAlt: "Game engine rendering demo"
  },
  {
    id: 2,
    title: "Physics Simulator",
    description: "Real-time physics simulation with collision detection, rigid body dynamics, and particle systems.",
    showcaseUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Physics-Fluid-Simulation-Blender.gif",
    showcaseAlt: "Physics simulation screenshot"
  },
  {
    id: 3,
    title: "Ray Tracer",
    description: "Monte Carlo ray tracer with global illumination, material system, and acceleration structures.",
    showcaseUrl: "https://www.scratchapixel.com/images/ray-tracing-camera/campixel.gif?",
    showcaseAlt: "Ray traced scene"
  },
  {
    id: 4,
    title: "Procedural Terrain",
    description: "GPU-based terrain generation using noise functions and tessellation shaders.",
    showcaseUrl: "https://i.imgur.com/HVO6cuL.gif",
    showcaseAlt: "Procedural terrain landscape"
  }
];

// Put 1 for true and 0 for false.
const startTextOnLeft = 1;

function PortfolioProjects() {
    return (
        <div className='projects'>
            <h1 className='projects__project-title'>List of Projects</h1>
            {projects.map((project, index) => (
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