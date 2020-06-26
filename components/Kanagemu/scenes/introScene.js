export default (state, entity) => {
    return (
        <div>
            <p>Apprenez les Kana(Hiragana/Katakana) avec Kanagemu.</p>
            <p>- Mode <u>Apprendre</u>: afficher simplement les Kana et tenter de memoriser.</p>
            <p>- Mode <u>Entrainement</u>: petit jeu ou les Kana s'affiche de maniere aleatoire sur la grille de Kana, afin d'eviter de les apprendre dans un ordre specifique.</p>
            <button onClick={entity.switchSceneValueAttr.bind(entity)} value={state.getState("mainSceneTrain") ? "mainSceneTrain" : null}>Ok</button>
        </div>
    )
}