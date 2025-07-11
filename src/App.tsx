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
		id: 3,
		title: "Novel DDGI Solution in DX12",
		description: "As part of my masters project, I implemented a novel Dynamic Diffuse Global Illumination (DDGI) solution called Radiance Cascades in DX12 with DXR. It is my most ambitious solo project I have made and proudly received compliments from the creator of the technique himself: Alexander Sannikov at Grinding Gear Games.",
		showcaseUrl: "https://www.scratchapixel.com/images/ray-tracing-camera/campixel.gif?",
		showcaseAlt: "Ray traced scene"
	},
	{
		id: 1,
		title: "Tinker Tails Rendering System",
		description: "The rendering system used in Tinker Tails (large game project) built from scratch in modern C++ using DirectX 11. The rendering system features: internal GPU resource management, deferred PBR rendering pipeline, HLSL shader hot-reloading, and more.",
		showcaseUrl: "/vite.svg",
		showcaseAlt: "Game engine rendering demo"
	},
		{
		id: 4,
		title: "Ray Traced Ambient Occlusion in DX12",
		description: "A project that was part of an optional 3D programming course where we had to come up with our own project that would showcase the capabilities of modern graphics APIs. This course was uniquely giving as we were fortunate enough to have the lectures be held by BTH alumni and Principal Member of Technical Staff at AMD: Stefan Petersson.",
		showcaseUrl: "https://i.imgur.com/HVO6cuL.gif",
		showcaseAlt: "Procedural terrain landscape"
	},
	{
		id: 2,
		title: "MiniJava Compiler",
		description: "A solo developed compiler for a subset of Java called MiniJava. This includes: lexing, parsing, AST generation, semantic analysis, IR creation, code generation, and code interpretation. This was part of an optional course in compiler design, which I received top grade in.",
		showcaseUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Physics-Fluid-Simulation-Blender.gif",
		showcaseAlt: "Physics simulation screenshot"
	},
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