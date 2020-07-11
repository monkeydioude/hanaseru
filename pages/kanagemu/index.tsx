import Kanagemu from '../../components/Kanagemu/Kanagemu'
import LangContext from '../../services/LangContext'

export default () => {
    return (
        <LangContext.Consumer>
            {({lang}) => (
                <Kanagemu lang={lang}></Kanagemu>
            )}
        </LangContext.Consumer>
    )
}