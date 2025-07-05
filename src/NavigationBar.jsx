import './NavigationBar.css';

export function NavigationBar({ items, className = '' }) {
    const handleNavClick = (event, href) => {
        event.preventDefault(); // Override default behavior of anchor click.

        // Find the DOM element that matches href. 
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const navbarElement = document.querySelector('.navbar');
            const navbarHeight = navbarElement.offsetHeight;

            // Dynamically find a scroll pos that does not cover the content.
            // Added 20 pixels as a forced margin.
            const scrollPos = targetElement.offsetTop - navbarHeight - 20; 

            // Element specific method to smoothly scroll it into view so 
            // the start of the block is at top of webpage.
            window.scrollTo({
                top: scrollPos,
                behavior: 'smooth'
            });
        }
    }

    return (
        // Navigation tag as it will contain links for navigating the site.
        <nav className={`navbar ${className}`}>
            <ul className='navbar__list'>
                {items.map((item) => ( // Instantiate each item in the navbar.
                    <li key={item.id} className='navbar__item'>
                        <a
                            href={item.href}
                            className='navbar__link'
                            onClick={(e) => handleNavClick(e, item.href)} // Catch the event and send it to custom event handler.
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}