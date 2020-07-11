import Link from 'next/link'
import { GetCompleteNavigation } from '../services/Navigation'
import './NavBar.scss'

const NavigationList = () => {
    return (
        <ul>
            {GetCompleteNavigation().map(item => <li key={item.label}><Link href={item.shortPath}><a>{item.label}</a></Link></li>)}
        </ul>
    )
}

export {
    NavigationList as NavigationList
}

export default () => {
    return (
        <div className="NavBar bg-choushuniro">
            {NavigationList()}
        </div>
    )
}