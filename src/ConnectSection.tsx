import './ConnectSection.css'

import { SquareIcon } from './IconComponents'

import githubIcon from './assets/GithubIcon.svg'
import linkedinIcon from './assets/LinkedinIcon.svg'

function ConnectSocials() {
    return (
        <div className='connect-socials'>
            <h2 className='connect-socials__title'>Socials</h2>
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

function ConnectOther() {
    return (
        <div className='connect-other'>
            <h2>Other</h2>
            <p>This is some other text. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nostrum natus fugiat. Quae, facilis in nam blanditiis odit est inventore ipsum alias, repellat molestias iste amet. Accusantium mollitia necessitatibus tempora?</p>
        </div>
    )
}

function ConnectSection() {
    return (
        <div className="connect-section">
            <ConnectSocials />
            <ConnectMail />
            <ConnectOther />
        </div>       
    )
}

export default ConnectSection