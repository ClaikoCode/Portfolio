import { useRef } from 'react';

import './NavigationBar.css';

export type NavbarItem = {
	id: string;
	href: string;
	label: string;
}

export type NavbarProps = {
	items: NavbarItem[];
	className?: string;
}

function HighlightElement(element: HTMLElement) {
	const animClassName = 'highlight-pulse-active';

	element.classList.add(animClassName);

	// After the class is added, add an event listener that will trigger once the animation is ended and remove tha class.
	element.addEventListener('animationend', () => {
		element.classList.remove(animClassName);
	}, { once: true });
}

export default function NavigationBar({ items, className = '' }: NavbarProps) {
	const navbarRef = useRef<HTMLElement>(null);

	const onNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
		event.preventDefault(); // Override default behavior of anchor click.

		// Find the DOM element that matches href. 
		const targetElement = document.querySelector(href);
		const navbarElement = navbarRef.current;
		if (targetElement instanceof HTMLElement && navbarElement) {
			const navbarHeight = navbarElement.offsetHeight;

			// When the element has scrolled into the viewport it should be highlighted and the observer 
			// should be disconnected.
			const onIntersect: IntersectionObserverCallback = (entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						HighlightElement(entry.target as HTMLElement);
						intersectionObserver.disconnect();
					}
				})
			};

			// Accounts for navbar and makes sure to trigger once the element is partly in view.
			const intersectObserverOptions: IntersectionObserverInit = {
				threshold: 0.2,
				rootMargin: `-${navbarHeight}px 0px 0px 0px`
			}

			const intersectionObserver = new IntersectionObserver(onIntersect, intersectObserverOptions);
			intersectionObserver.observe(targetElement);

			// Dynamically find a scroll pos that does not cover the content.
			// Added buffer pixels as a forced margin.
			const offsetBuffer = 40;
			const scrollPos = targetElement.offsetTop - navbarHeight - offsetBuffer;

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
		<nav ref={navbarRef} className={`navbar ${className}`}>
			<ul className='navbar__list'>
				{items.map((item) => ( // Instantiate each item in the navbar.
					<li key={item.id} className='navbar__item'>
						<a
							href={item.href}
							className='navbar__link'
							onClick={(e) => onNavClick(e, item.href)} // Catch the event and send it to custom event handler.
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}