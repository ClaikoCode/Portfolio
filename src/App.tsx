import PortfolioProjects from './PortfolioProjects';
import LanguagesShowcase from './LanguagesShowcase';
import PortfolioIntro from './PortfolioIntro';
import ConnectSection from './ConnectSection';
import NavigationBar, {NavbarItem } from './NavigationBar';

import './App.css'

const navbarItems: NavbarItem[] = [
    {id: 'intro', href: '#intro', label: 'Introduction'},
    {id: 'projects', href: '#projects', label: 'Projects'},
    {id: 'connect', href: '#connect', label: 'Connect'}
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