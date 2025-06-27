import langC from './assets/cIcon.svg'
import langCpp from './assets/cppIcon.svg'
import langLua from './assets/LuaIcon.svg'
import langPython from './assets/PythonIcon.svg'
import techDX12 from './assets/DX12IconWordmark-cropped.svg'
import techDX11 from './assets/DX11IconWordmark-cropped.svg'

import './LanguagesShowcase.css'

function LanguageIcon({icon, altText}) {
    return (
        <div className='language-container'>
            <img className='language-container__icon' alt={`Icon for ${altText}`} src={icon}/>
        </div>
    )
}

function TechIcon({icon, altText}) {
    return (
        <div className='tech-container'>
            <img className='tech-container__icon' alt={`Icon for ${altText}`} src={icon}/>
        </div>
    )
}

function LanguagesShowcase() {
    return (
        <div>
            <div className='languages-showcase'>
                <LanguageIcon icon={langC} altText={'C'}/>
                <LanguageIcon icon={langCpp} altText={'C++'}/>
                <LanguageIcon icon={langLua} altText={'Lua'}/>
                <LanguageIcon icon={langPython} altText={'Python'}/>
            </div>

            <div className='tech-showcase'>
                <TechIcon icon={techDX12} altText={'DX12'}/>
                <TechIcon icon={techDX11} altText={'DX11'}/>
            </div>
        </div>
    )
}

export default LanguagesShowcase