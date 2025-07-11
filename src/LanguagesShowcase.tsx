import { SquareIcon, WordmarkIcon } from './IconComponents'

import langC from './assets/cIcon.svg'
import langCpp from './assets/cppIcon.svg'
import langLua from './assets/LuaIcon.svg'
import langPython from './assets/PythonIcon.svg'

// import langC from './assets/cIconPlain.svg'
// import langCpp from './assets/cppIconPlain.svg'
// import langLua from './assets/LuaIconPlain.svg'
// import langPython from './assets/PythonIconPlain.svg'

import techDX12 from './assets/DX12IconWordmark-cropped.svg'
import techDX11 from './assets/DX11IconWordmark-cropped.svg'
import techCuda from './assets/NvidiaCUDAWordmark.svg'

import './LanguagesShowcase.css'

function LanguagesShowcase() {
	return (
		<div className='showcase-container'>
			<div className='languages-showcase'>
				<SquareIcon iconImage={langC} altText={'C'} />
				<SquareIcon iconImage={langCpp} altText={'C++'} />
				<SquareIcon iconImage={langLua} altText={'Lua'} />
				<SquareIcon iconImage={langPython} altText={'Python'} />
			</div>

			<div className='tech-showcase'>
				<WordmarkIcon iconImage={techDX12} altText={'DX12'} />
				<WordmarkIcon iconImage={techDX11} altText={'DX11'} />
				<WordmarkIcon iconImage={techCuda} altText={'Cuda'} />
			</div>
		</div>
	)
}

export default LanguagesShowcase