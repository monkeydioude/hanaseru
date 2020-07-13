import Link from 'next/link'
import { GetCompleteNavigation } from '../../services/Navigation'
import './NavBar.scss'

const NavigationList = () => {
    return (
        <ul className="grid">
            {GetCompleteNavigation().map(item => <li className="col" key={item.label}><Link href={item.shortPath}><a>{item.label}</a></Link></li>)}
        </ul>
    )
}

export {
    NavigationList as NavigationList
}

export default () => {
    return (
        <div className="NavContainer">
            <div className="NavBar">
                {NavigationList()}
            </div>
            <div className="deck"></div>
        </div>
    )
}