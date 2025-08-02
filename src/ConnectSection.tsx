import './ConnectSection.css'

import { SquareIcon } from './IconComponents'

import githubIcon from './assets/GithubIcon.svg'
import linkedinIcon from './assets/LinkedinIcon.svg'

function ConnectSocials() {
	return (
		<div className='connect-socials'>
			<h2 className='connect-socials__title'>Connect</h2>
			<div className='connect-socials__links'>
				<SquareIcon iconImage={githubIcon} altText='Github' link='https://github.com/ClaikoCode' />
				<SquareIcon iconImage={linkedinIcon} altText='Linkedin' link='https://www.linkedin.com/in/jonathan-dellova/' />
			</div>
		</div>
	)
}

function ConnectMail() {
	return (
		<div className='connect-mail'>
			<h2>Contact me directly</h2>
			<a href='mailto:jonathan.dellova42@gmail.com'>jonathan.dellova42@gmail.com</a>
		</div>
	)
}

function ConnectCV() {
	return (
		<div className='connect-other'>
			<h2>CV</h2>
			<a href='/JonathanDellOvaCV.pdf' download={true}>Download as PDF</a>
		</div>
	)
}

function ConnectInfo() {
	return (
		<div className='connect-info'>
			<h2>Info</h2>
			<p className='connect-info_text'>This website was built in 16 working days by me with not prior knowledge of React, TypeScript, Vite, or CloudFlare.</p>
		</div>
	)
}

function ConnectSection() {
	return (
		<div className="connect-section" id='connect'>
			<ConnectSocials />
			<ConnectMail />
			<ConnectCV />
			<ConnectInfo />
		</div>
	)
}

export default ConnectSection