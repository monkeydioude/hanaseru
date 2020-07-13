import LangContext from '../../services/LangContext'
import Link from 'next/link'

export default () => {
    return (
        <div>
            <div>
                <p>Apprenez les Kana(Hiragana/Katakana) avec Kanagemu.</p>
                <p>- Mode <u>Apprendre</u>: afficher simplement les Kana et tenter de memoriser.</p>
                <p>- Mode <u>Entrainement</u>: petit jeu ou les Kana s'affiche de maniere aleatoire sur la grille de Kana, afin d'eviter de les apprendre dans un ordre specifique.</p>
                <button>Ok</button>
            </div>
                <div>
                <select defaultValue="mainSceneTrain" onChange={entity.switchSceneValueAttr.bind(entity)}>
                    <option value="mainSceneTrain">Entrainez</option>
                    <option value="mainSceneLearn">Apprenez</option>
                </select>
                <span> vous a ecrire les {displayKanaSelect(entity)}</span>
                <button onClick={entity.switchSceneValueAttr.bind(entity)} value={state.getState("train") ? "train" : null}>Ok</button>
            </div>
            </div>
        // <LangContext.Consumer>
        //     {({lang}) => (
        //         <Kanagemu lang={lang}></Kanagemu>
        //     )}
        // </LangContext.Consumer>
    )
}