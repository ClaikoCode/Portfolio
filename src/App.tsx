import PortfolioProjects from './PortfolioProjects';
import LanguagesShowcase from './LanguagesShowcase';
import PortfolioIntro from './PortfolioIntro';
import ConnectSection from './ConnectSection';
import NavigationBar, {NavbarItem } from './NavigationBar';

import './App.css'

const navbarItems: NavbarItem[] = [
    {id: 'intro', href: '#intro', label: 'Intro'},
    {id: 'projects', href: '#projects', label: 'Projects'}
];

function App() {
    return (
        <div>
            <NavigationBar items={navbarItems} className='top'/>
            
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