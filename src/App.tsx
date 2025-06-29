import PortfolioProjects from './PortfolioProjects';
import LanguagesShowcase from './LanguagesShowcase';
import PortfolioIntro from './PortfolioIntro';

import './App.css'

function App() {
    return (
        <div className='portfolio'>
            <PortfolioIntro />
            <LanguagesShowcase />
            <PortfolioProjects />
        </div>
    )
}

export default App