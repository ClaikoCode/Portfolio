import './ConnectSection.css'

import { SquareIcon } from './IconComponents'

import githubIcon from './assets/GithubIcon.svg'
import linkedinIcon from './assets/LinkedinIcon.svg'

function ConnectSocials() {
    return (
        <div className='connect-socials'>
            <p className='connect-socials__title'>Socials</p>
            <div className='connect-socials__links'>
                <SquareIcon iconImage={githubIcon} altText='Github' link='https://github.com/ClaikoCode' />
                <SquareIcon iconImage={linkedinIcon} altText='Linkedin' link='https://www.linkedin.com/in/jonathan-dellova/' />
            </div>
        </div>
    )
}

function ConnectSection() {
    return (
        <div className="connect-section">
            <ConnectSocials />
            <p className='test'>This is some text</p>
        </div>       
    )
}

export default ConnectSection