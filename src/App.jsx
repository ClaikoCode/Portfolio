import PortfolioProjects from './PortfolioProjects.jsx';
import LanguagesShowcase from './LanguagesShowcase.jsx';
import PortfolioIntro from './PortfolioIntro.jsx';
import { NavigationBar } from './NavigationBar.jsx';

import './App.css'

const items = [
    {id: 'home', label: 'Intro', href: '#intro'},
    {id: 'projects', label: 'Projects', href: '#projects'}
];

function App() {
    return (
        <div className='portfolio'>
            <NavigationBar items={items} className={'navtest'}/>
            <PortfolioIntro />
            <LanguagesShowcase />
            <PortfolioProjects />
        </div>
    )
}

export default App