import langC from './assets/cIcon.svg'
import langCpp from './assets/cppIcon.svg'
import langLua from './assets/LuaIcon.svg'
import langPython from './assets/PythonIcon.svg'
import techDX12 from './assets/DX12IconWordmark-cropped.svg'
import techDX11 from './assets/DX11IconWordmark-cropped.svg'

import './LanguagesShowcase.css'

interface IconProps {
    iconImage: string;
    altText: string;
}

interface TechProps {
    techImage: string;
    altText: string;
}

function LanguageIcon({iconImage, altText}: IconProps) {
    return (
        <div className='language-container'>
            <img className='language-container__icon' alt={`Icon for ${altText}`} src={iconImage}/>
        </div>
    )
}

function TechIcon({techImage, altText}: TechProps) {
    return (
        <div className='tech-container'>
            <img className='tech-container__icon' alt={`Icon for ${altText}`} src={techImage}/>
        </div>
    )
}

function LanguagesShowcase() {
    return (
        <div>
            <div className='languages-showcase'>
                <LanguageIcon iconImage={langC} altText={'C'}/>
                <LanguageIcon iconImage={langCpp} altText={'C++'}/>
                <LanguageIcon iconImage={langLua} altText={'Lua'}/>
                <LanguageIcon iconImage={langPython} altText={'Python'}/>
            </div>

            <div className='tech-showcase'>
                <TechIcon techImage={techDX12} altText={'DX12'}/>
                <TechIcon techImage={techDX11} altText={'DX11'}/>
            </div>
        </div>
    )
}

export default LanguagesShowcase