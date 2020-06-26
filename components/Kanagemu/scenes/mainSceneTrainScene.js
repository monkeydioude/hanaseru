import { displayKanaSelect } from './index'

export default (state, entity) => {
    return (
        <div>
            <select defaultValue="mainSceneTrain" onChange={entity.switchSceneValueAttr.bind(entity)}>
                <option value="mainSceneTrain">Entrainez</option>
                <option value="mainSceneLearn">Apprenez</option>
            </select>
            <span> vous a ecrire les {displayKanaSelect(entity)}</span>
            <button onClick={entity.switchSceneValueAttr.bind(entity)} value={state.getState("train") ? "train" : null}>Ok</button>
        </div>
    )
}