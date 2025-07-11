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
					I am a video game programmer primarily with experience in engine development.
					This includes everything from setting up a C++ project with third-party
					library (EnTT, ImGui, CUDA, etc) building and linking to creating a rendering engine
					in DX11 with a frustum culled render queue, PBR rendering pipeline, UUID based model asset manager/loader,
					multi-threaded runtime shader compilation system with hot-reloading, and more.
				</p>

				<p>
					My degree, which is a Master of Science in Engineering: Game and Software Engineering, at Blekinge Instituite of Technology (BTH)
					has given me specialized knowledge in efficient real-time programming from courses on
					operating systems, multi-threaded programming, and 3D programming.
					It has also given me more general but still essential knowledge in
					leadership and team management, artificial intelligence, calculus and statistics,
					software architecture, data visualization, and research methodology.
				</p>

				<p>
					Whilst my education consisted of 5 years filled with a wide array of courses, I gained the most experience
					from two specific ones: Small Game Project (7 weeks) and Large Game Project (13 weeks). The goal of these
					courses were to simulate a work environment where me and my classmates were given our own office
					where we developed a game all the way from concept in our minds to fully
					working and playable product that we had to create a pitch for during the first week.
					We worked in a SCRUM environment with two week sprints and had to present our work at
					the end of every sprint to a group of teachers, who acted as our stakeholders. They also helped through
					supervision but we had full creative freedom over what we wanted to create and how
					it should be created. The only requirement was that we had to deliver a finished product
					and that we could not use a graphics library for rendering our game assets.
				</p>
			</div>
		</div>
	)
}

export default PortfolioIntro