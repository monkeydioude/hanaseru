import { displayKanaSelect } from './index'

export default (state, entity) => {
    return (
        <div>
        <select defaultValue="mainSceneLearn" onChange={entity.switchSceneValueAttr.bind(entity)}>
            <option value="mainSceneTrain">Entrainez</option>
            <option value="mainSceneLearn">Apprenez</option>
        </select>
        <span> les {displayKanaSelect(entity)}</span>
        <button onClick={entity.switchSceneValueAttr.bind(entity)} value={state.getState("learn") ? "learn" : null}>Ok</button>
    </div>
    )
}