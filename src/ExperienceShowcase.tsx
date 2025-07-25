import { SquareIcon, WordmarkIcon } from './IconComponents'

import langC from './assets/cIcon.svg'
import langCpp from './assets/cppIcon.svg'
import langLua from './assets/LuaIcon.svg'
import langPython from './assets/PythonIcon.svg'
import langJavascript from './assets/javascriptIcon.svg'

// import langC from './assets/cIconPlain.svg'
// import langCpp from './assets/cppIconPlain.svg'
// import langLua from './assets/LuaIconPlain.svg'
// import langPython from './assets/PythonIconPlain.svg'
// import langJavascript from './assets/javascriptIcon.svg'

import techDX12 from './assets/DX12IconWordmark-cropped.svg'
import techDX11 from './assets/DX11IconWordmark-cropped.svg'
import techCuda from './assets/NvidiaCUDAWordmark.svg'
import techReact from './assets/reactIcon.svg'
import techTypescript from './assets/TypescriptIcon.svg'
import techMySQL from './assets/MySQLWordmark.svg'

import './ExperienceShowcase.css'

function ExperienceShowcase() {
	return (
		<div className='experience-section' id='experience'>
			<h1>Software Development Experience</h1>

			<h3>
				During my time at BTH as well as through personal endeavors, I have gained extensive knowledge in several programming languages and technologies that are listed below. They are ordered by how much personal experience and understanding I have in each, from top to bottom, left to right.
			</h3>

			<div className='showcase-container'>
				<div className='tech-showcase' id='first'>
					<SquareIcon iconImage={langCpp} altText={'C++'} />
					<SquareIcon iconImage={langC} altText={'C'} />
					<WordmarkIcon iconImage={techDX11} altText={'DX11'} />
					<WordmarkIcon iconImage={techDX12} altText={'DX12'} />
				</div>

				<div className='tech-showcase'>
					<SquareIcon iconImage={langLua} altText={'Lua'} />
					<SquareIcon iconImage={langPython} altText={'Python'} />
					<WordmarkIcon iconImage={techMySQL} altText={'MySQL'} />
					<WordmarkIcon iconImage={techCuda} altText={'Cuda'} />
				</div>

				<div className='tech-showcase' id='last'>
					<SquareIcon iconImage={langJavascript} altText={'JavaScript'} />
					<SquareIcon iconImage={techTypescript} altText={'TypeScript'} />
					<SquareIcon iconImage={techReact} altText={'React'} />
				</div>
			</div>

			<h2>Agile working experience</h2>
			<p>
				My education consisted of <b>five years</b> filled with a wide array of courses that gave me both theoretical and practical knowledge in software development.
				However, working on a project in the real world is not often done by a single person. The team aspects of software development is as important if not more important than
				having deep practical knowledge with code. Without good communication and clear responsibilities, a project is doomed to fail
				sooner or later due to misunderstandings and failure to deliver on time.
			</p>

			<p>
				This is why I am especially grateful for specifically two courses that were part of my curriculum: <b>Small Game Project</b> (7 weeks) and <b>Large Game Project</b> (13 weeks). The goal of these
				courses were to simulate a work environment where me and my classmates were given our own office
				where we developed a game all the way from a concept in our minds to a fully
				working and playable product.
			</p>

			<p>
				We worked a classic "9 to 5" five-day work week in a SCRUM environment with two week sprints. We had to first pitch our initial idea and also had to present our work at
				the end of every sprint to a group of teachers, who acted as our stakeholders. They also helped through
				supervision but we were the product owners and had full creative freedom over <i>what</i> we wanted to create and <i>how</i> it should be created.
				The only requirement was that we had to deliver a finished product and that we could not use a graphics library for rendering our game assets.
			</p>
		</div>

	)
}

export default ExperienceShowcase