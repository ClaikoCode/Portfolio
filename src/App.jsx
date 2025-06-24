import ProjectRow from './ProjectRow.jsx'

import './App.css'

const projects = [
  {
    id: 1,
    title: "Custom Game Engine",
    description: "A modern C++ game engine with advanced rendering pipeline, entity-component system, and cross-platform support.",
    showcaseUrl: "../src/assets/react.svg",
    showcaseAlt: "Game engine rendering demo"
  },
  {
    id: 2,
    title: "Physics Simulator",
    description: "Real-time physics simulation with collision detection, rigid body dynamics, and particle systems.",
    showcaseUrl: "../src/assets/react.svg",
    showcaseAlt: "Physics simulation screenshot"
  },
  {
    id: 3,
    title: "Ray Tracer",
    description: "Monte Carlo ray tracer with global illumination, material system, and acceleration structures.",
    showcaseUrl: "../src/assets/react.svg",
    showcaseAlt: "Ray traced scene"
  },
  {
    id: 4,
    title: "Procedural Terrain",
    description: "GPU-based terrain generation using noise functions and tessellation shaders.",
    showcaseUrl: "../src/assets/react.svg",
    showcaseAlt: "Procedural terrain landscape"
  }
];

// Put 1 for true and 0 for false.
const startTextOnLeft = 1;

function App() {
    return (
        <div className="portfolio">
            <h1 className='portfolio__project-title'>List of Projects</h1>
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

export default App