import { GetCompleteNavigation } from '../services/Navigation'
import Link from 'next/link'

export default () => {
    return (
        <ul>
            {GetCompleteNavigation().map(item => <li key={item.label}><Link href={item.shortPath}><a>{item.label}</a></Link></li>)}
        </ul>
    )
}