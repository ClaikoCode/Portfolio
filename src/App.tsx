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
		description: "As part of my masters project, I implemented a novel Dynamic Diffuse Global Illumination (DDGI) solution called Radiance Cascades in DX12 with DXR.",
		showcaseUrl: "https://www.scratchapixel.com/images/ray-tracing-camera/campixel.gif?",
		showcaseAlt: "Ray traced scene",
		videoUrl: "/RCDemo.mp4",
		expandedDesc: "It is my most ambitious solo project I have made and proudly received compliments from the creator of the technique himself: Alexander Sannikov at Grinding Gear Games."
	},
	{
		id: 1,
		title: "Tinker Tails Rendering System",
		description: "The rendering system used in Tinker Tails (large game project) built from scratch in modern C++ using DirectX 11. No third-party DX11 wrappers were used and all shader code was written in HLSL.",
		showcaseUrl: "/TinkerTails.png",
		showcaseAlt: "Game engine rendering demo",
		videoUrl: "https://www.youtube.com/embed/NRiXL1utbLc",
		expandedDesc: "The rendering system features: deferred PBR rendering pipeline, internal GPU resource management and abstraction, HLSL shader hot-reloading, modern PPFX such as multi-pass bloom and HDR tone-mapping, back-to-front transparency render ordering, and more. Additional tech is shown towards the middle of the video."
	},
	{
		id: 4,
		title: "Ray Traced Ambient Occlusion in DX12",
		description: "This project was part of an optional 3D programming course where we had to come up with our own problem to solve that would showcase the capabilities of modern graphics APIs.",
		showcaseUrl: '/RTAO.gif',
		showcaseAlt: "GIF of the RT AO frame rendering steps.",
		videoUrl: "https://www.youtube.com/embed/CJdhUcVpUBo",
		expandedDesc: "I chose to create a simple but complete solution for AO using raytracing with temporal accumulation, which was my introduction to DX12 and DXR. This course was uniquely rewarding as we were fortunate enough to have the lectures be held by BTH alumni and Principal Member of Technical Staff at AMD: Stefan Petersson."
	},
	{
		id: 2,
		title: "MiniJava Compiler",
		description: "A solo developed compiler for a subset of Java called MiniJava. The project was part of an optional course in compiler design, which I received top grade in.",
		showcaseUrl: "./CompilerPreview.gif",
		showcaseAlt: "Physics simulation screenshot",
		videoUrl: "https://www.youtube.com/embed/fRbLB2Vc2sc",
		expandedDesc: "The compiler includes: lexing, parsing, AST generation, semantic analysis, IR creation, and code generation."
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