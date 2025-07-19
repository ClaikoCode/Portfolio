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
					I am a video game developer primarily experienced in game engine and 3D graphics programming.
					This includes everything from setting up a C++ project with third-party
					library building and linking (EnTT, ImGui, CUDA, etc.) to creating a rendering engine
					in DirectX 11 with a frustum culled render queue, PBR rendering pipeline, UUID based model asset manager/loader,
					multi-threaded runtime shader compilation system with hot-reloading, and more.
				</p>

				<p>
					My degree, a <b>Master of Science in Engineering: Game and Software Engineering</b>, at <a href='https://www.bth.se/'>Blekinge Institute of Technology (BTH)</a> has
					given me specialized knowledge in efficient real-time programming, which I gained from courses such as:
				</p>

				<ul>
					<li>Lower level 3D programming (DX11 and DX12)</li>
					<li>Multi-threaded programming</li>
					<li>Operating systems</li>
					<li>Compiler design and translation technique</li>
				</ul>

				<p>
					My degree has also given me more general but still essential knowledge in:
				</p>

				<ul>
					<li>Leadership and team management</li>
					<li>Agile frameworks and workflows</li>
					<li>Artificial intelligence</li>
					<li>Calculus and statistics</li>
					<li>Software architecture</li>
					<li>Data visualization</li>
					<li>Research methodology</li>
				</ul>

				<p>
					Although these were all part of my curriculum, it is the projects themselves that has given me the most experience as a software engineer.
					Almost every course had its own project but a handful of them has stood out to me. Not only in terms of complexity, but also in terms of how proud I am for 
					having overcome the challenge that came with them and how much I learned from them.
				</p>
			</div>
		</div>
	)
}

export default PortfolioIntro