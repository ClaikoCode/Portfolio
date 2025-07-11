import PortfolioProjects from './PortfolioProjects';
import ExperienceShowcase from './ExperienceShowcase';
import PortfolioIntro from './PortfolioIntro';
import ConnectSection from './ConnectSection';
import NavigationBar, { NavbarItem } from './NavigationBar';
import { type Project } from './ProjectRow';

import './App.css'

const navbarItems: NavbarItem[] = [
	{ id: 'intro', href: '#intro', label: 'Introduction' },
	{ id: 'projects', href: '#projects', label: 'Projects' },
	{ id: 'experience', href: '#experience', label: 'Experience' },
	{ id: 'connect', href: '#connect', label: 'Connect' },
];

const projects: Project[] = [
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


function App() {
	return (
		<div>
			<NavigationBar items={navbarItems} className='top' />

			<div className='portfolio'>
				<PortfolioIntro />
				<PortfolioProjects items={projects} />
				<ExperienceShowcase />
			</div>

			<ConnectSection />
		</div>

	)
}

export default App