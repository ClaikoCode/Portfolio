import langC from './assets/cIcon.svg'
import langCpp from './assets/cppIcon.svg'
import langLua from './assets/LuaIcon.svg'
import langPython from './assets/PythonIcon.svg'

import './LanguagesShowcase.css'

function LanguageIcon({icon}) {
    return (
        <div className='language-container'>
            <img className='language-container__icon' src={icon}/>
        </div>
    )
}

function LanguagesShowcase() {
    return (
        <div className='languages-showcase'>
            <LanguageIcon icon={langC}/>
            <LanguageIcon icon={langCpp}/>
            <LanguageIcon icon={langLua}/>
            <LanguageIcon icon={langPython}/>
        </div>
    )
}

export default LanguagesShowcase