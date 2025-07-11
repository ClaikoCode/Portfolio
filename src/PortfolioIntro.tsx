import './PortfolioIntro.css'

function PortfolioIntro() {
	return (
		<div className='intro' id='intro'>
			<h1>Introduction</h1>
			<div className='intro__text'>
				<p>
					My name is <strong>Jonathan Dell'Ova</strong>.
				</p>

				<p>
					I am a video game developer primarily with experience in engine and graphics programming.
					This includes everything from setting up a C++ project with third-party
					library building and linking (EnTT, ImGui, CUDA, etc.) to creating a rendering engine
					in DX11 with a frustum culled render queue, PBR rendering pipeline, UUID based model asset manager/loader,
					multi-threaded runtime shader compilation system with hot-reloading, and more.
				</p>

				<p>
					My degree, which is a <b>Master of Science in Engineering: Game and Software Engineering</b>, at Blekinge Instituite of Technology (BTH)
					has given me specialized knowledge in efficient real-time programming from courses on
					operating systems, multi-threaded programming, and 3D programming (DX11 and DX12), just to name a few.
					It has also given me more general but still essential knowledge in
					leadership and team management, artificial intelligence, calculus and statistics,
					software architecture, data visualization, and research methodology.
				</p>
			</div>
		</div>
	)
}

export default PortfolioIntro