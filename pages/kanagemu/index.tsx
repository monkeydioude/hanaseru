import { Component } from 'react'

enum KanaIndex {
    HIRAGANA,
    KATAKANA
}

enum KanaLabel {
    HIRAGANA = "hiragana",
    KATAKANA = "katakana"
}

const KanaModes = new Map<number, string>([
    [KanaIndex.HIRAGANA, KanaLabel.HIRAGANA],
    [KanaIndex.KATAKANA, KanaLabel.KATAKANA]
])

export default class Kanagemu extends Component {
    currentKanaMode: number

    constructor(props) {
        super(props)
        this.currentKanaMode = KanaIndex.HIRAGANA
    }

    getCurrentKanaModeLabel() : string {
        return KanaModes[this.currentKanaMode]
    }

    render() {
        return (
            <div>
                <div>
                    <p>Apprenez les Kana(Hiragana/Katakana) avec Kanagemu.</p>
                    <p>- Mode <u>Apprendre</u>: afficher simplement les Kana et tenter de memoriser.</p>
                    <p>- Mode <u>Entrainement</u>: petit jeu ou les Kana s'affiche de maniere aleatoire sur la grille de Kana, afin d'eviter de les apprendre dans un ordre specifique.</p>
                    <button>Ok</button>
                </div>
                <div>
                    <select defaultValue="mainSceneTrain">
                        <option value="mainSceneTrain">Entrainez</option>
                        <option value="mainSceneLearn">Apprenez</option>
                    </select>
                    <span> vous a ecrire les {this.getCurrentKanaModeLabel()}</span>
                    <button>Ok</button>
                </div>
            </div>
            // <LangContext.Consumer>
            //     {({lang}) => (
            //         <Kanagemu lang={lang}></Kanagemu>
            //     )}
            // </LangContext.Consumer>
        )
    }
}