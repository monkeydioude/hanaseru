import loadingScene from './loadingScene'
import introScene from './introScene'
import mainSceneTrainScene from './mainSceneTrainScene'
import mainSceneLearnScene from './mainSceneLearnScene'
import trainScene from './trainScene'
import learnScene from './learnScene'
import { kanaModes } from '../params'

function displayKanaSelect(entity) {
    return (
        <select onChange={(e) => entity.updateKanaMode(e.currentTarget.value)} defaultValue={entity.currentKanaMode}>
        { kanaModes.map((label, mode) => {
            return <option key={mode} value={mode}>{label}</option>
        })}
    </select>
    )
}

export {
    displayKanaSelect,
    loadingScene,
    introScene,
    mainSceneTrainScene,
    mainSceneLearnScene,
    trainScene,
    learnScene
}