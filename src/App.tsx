import PortfolioProjects from './PortfolioProjects';
import LanguagesShowcase from './LanguagesShowcase';
import PortfolioIntro from './PortfolioIntro';
import ConnectSection from './ConnectSection';

import './App.css'

function App() {
    return (
        <div>
            <div className='portfolio'>
                <PortfolioIntro />
                <LanguagesShowcase />
                <PortfolioProjects />
            </div>

            <ConnectSection />
        </div>
        
    )
}

export default App