import { useRouter } from 'next/router'
import Kanagemu from '../../../components/Kanagemu/Kanagemu'
import LangContext from '../../../services/LangContext'

export default () => {
    let {scene, kanaMode} = useRouter().query
    return (
        <LangContext.Consumer>
            {({lang}) => (
                <Kanagemu lang={lang} scene={scene} kanaMode={kanaMode}></Kanagemu>
            )}
        </LangContext.Consumer>
    )
}