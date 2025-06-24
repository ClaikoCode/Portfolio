import './ContentRow.css'
import reactLogo from './assets/react.svg'

function ContentRow() {
    return (
        <div className="content-row">
            <div className="left-content">This is left content</div>
            <div className="right-content">
                <img src={reactLogo}  alt='React logo'/>
            </div>
        </div>
    )
}

export default ContentRow