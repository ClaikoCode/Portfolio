import PortfolioProjects from './PortfolioProjects.jsx';
import LanguagesShowcase from './LanguagesShowcase.jsx';
import PortfolioIntro from './PortfolioIntro.jsx';

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