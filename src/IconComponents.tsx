import './IconComponents.css'

export type IconProps = {
    iconImage: string;
    altText: string;
    link?: string | null;
    size?: string; // Will add an inline style specifying width. 
}

enum IconType {
    Square,
    Wordmark
}

const DefaultSquareIconSize: string = '75px';

// Takes in icon props and returns a JSX element with a class name corresponding to a given IconType.
function GiveImageElement({iconImage, altText, link, size}: IconProps, iconType: IconType) {
    let classNameStr = 'icon-container__';
    
    switch(iconType) {
        case IconType.Square:
            classNameStr += 'square-image';
            break;
        case IconType.Wordmark:
            classNameStr += 'wordmark-image';
            break;
        default:
            classNameStr += 'invalid-image';
    }

    const imgElement = <img className={classNameStr} alt={`Icon for ${altText}.`} src={iconImage} style={{width: `${size}`}}/>

    return (
        <div className='icon-container' >
            {link ? (<a href={link} target='_blank'>{imgElement}</a>) : (imgElement)}
        </div>
    )
}

export function SquareIcon({iconImage, altText, link = null, size = DefaultSquareIconSize}: IconProps) {
    return GiveImageElement({iconImage, altText, link, size}, IconType.Square)
}

export function WordmarkIcon({iconImage, altText, link = null}: IconProps) {
    return GiveImageElement({iconImage, altText, link}, IconType.Wordmark)
}

