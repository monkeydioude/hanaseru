import Layout from '../components/Layout'
import Cookies from 'universal-cookie'
import React, { Component } from 'react'
import State from '../services/StateMachine'

const scenes = {
    loading: new State("loading", loadingScene),
    intro: new State("intro", introScene),
    mainSceneTrain: new State("mainSceneTrain", mainSceneTrainScene),
    mainSceneLearn: new State("mainSceneLearn", mainSceneLearnScene),
    train: new State("train", trainScene),
    learn: new State("learn", learnScene)
}

const kanaMode = ["hiragana", "katakana"]

function loadingScene() {
    return (
        <div>Lola dingue</div>
    )
}

function introScene(state, entity) {
    return (
        <div>
            <p>Apprenez les Kana(Hiragana/Katakana) avec Kanagemu.</p>
            <p>- Mode <u>Apprendre</u>: afficher simplement les Kana et tenter de memoriser.</p>
            <p>- Mode <u>Entrainement</u>: petit jeu ou les Kana s'affiche de maniere aleatoire sur la grille de Kana, afin d'eviter de les apprendre dans un ordre specifique.</p>
            <button onClick={entity.switchSceneValueAttr.bind(entity)} value={state.getState("mainSceneTrain") ? "mainSceneTrain" : null}>Ok</button>
        </div>
    )
}

function displayKanaSelect(entity) {
    return (
        <select onChange={(e) => entity.updateKanaMode(e.currentTarget.value)} defaultValue={entity.currentKanaMode}>
        { kanaMode.map((label, mode) => {
            return <option key={mode} value={mode}>{label}</option>
        })}
    </select>
    )
}

function mainSceneTrainScene(state, entity) {
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

function mainSceneLearnScene(state, entity) {
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

function trainScene() {
    return (
        <p>tchou tchou le ptit train</p>
    )
}

function learnScene() {
    return (
        <p>2p</p>
    )
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.nextSceneDataLabel = "data-next-scene"
        this.defaultSceneLabel = "intro"
        this.currentKanaMode = 0
        this.cookies = new Cookies()

        scenes.intro.linkState(scenes.mainSceneTrain)
        scenes.mainSceneTrain.linkState(scenes.mainSceneLearn)
        scenes.mainSceneLearn.linkState(scenes.mainSceneTrain)

        scenes.mainSceneTrain.linkState(scenes.train)
        scenes.mainSceneLearn.linkState(scenes.learn)
        scenes.train.linkState(scenes.learn)
        scenes.learn.linkState(scenes.train)

        this.state = {
            currentScene: scenes.loading
        }
    }

    componentDidMount() {
        this.setState({currentScene: this.getCurrentStateFromCookies()})
    }

    switchSceneValueAttr(e) {
        if (!e.currentTarget.value) {
            console.log("Could not switchScene: has no value")
            return
        }

        let nextScene = e.currentTarget.value

        this.switchScene(nextScene)
    }

    switchScene(nextSceneLabel) {
        let nextScene = this.state.currentScene.getState(nextSceneLabel)
        if (!nextScene) {
            console.log("Could not switchScene: scene ", nextSceneLabel ,"does not exist in the current", this.state.currentScene.name, "scene")
            return
        }

        this.cookies.set("currentScene", nextSceneLabel)
        this.setState({currentScene: nextScene})
    }

    getCurrentStateFromCookies() {
        let currentScene = this.cookies.get("currentScene")
    
        if (!currentScene) {
            currentScene = this.defaultSceneLabel
        }

        return scenes[currentScene]
    }

    updateKanaMode(kanaMode) {
        this.currentKanaMode = parseInt(kanaMode)
    }

    render() {
        return (
            <Layout> {this.state.currentScene.render(this)} </Layout>
        )
    }
}