import './PortfolioIntro.css'

function PortfolioIntro() {
	return (
		<div className='intro' id='intro'>
			<div className='intro__text'>
				<p id='first'>
					My name is <strong className='my-name'>Jonathan&nbsp;Dell'Ova</strong>
				</p>

				<p>
					I am a video game developer primarily experienced in game engine programming and 3D graphics programming.
				</p>

				<p>
					This includes everything from setting up a C++ Visual Studio project with third-party
					library compilation (EnTT, ImGui, CUDA, etc.) to creating a rendering engine
					in DirectX 11 with a frustum culled render queue, PBR rendering pipeline, UUID based model asset manager/loader,
					multi-threaded runtime shader compilation system with hot-reloading, and more.
				</p>

				<p>
					My degree, a <b>Master of Science in Engineering: Game and Software Engineering</b>, at <a href='https://www.bth.se/' target='_blank'>Blekinge Institute of Technology (BTH)</a> has
					given me deep knowledge of efficient real-time programming, which I gained from courses such as:
				</p>

				<ul>
					<li>Lower level 3D programming (DX11 and DX12)</li>
					<li>Multi-threaded programming</li>
					<li>Operating systems</li>
					<li>Compiler design and translation technique</li>
				</ul>

				<p>
					My degree has also given me essential knowledge in:
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
					Although these were all part of my curriculum, it is the projects themselves that have given me the most experience as a software engineer.
					Almost every course had its own project but a select few has stood out to me. Not only in terms of complexity, but also in terms of how proud I am for
					having overcome the challenges that accompanied these projects and how much I learned from them. These are listed below.
				</p>
			</div>
		</div>
	)
}

export default PortfolioIntro