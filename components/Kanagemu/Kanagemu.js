import Layout from '../Layout'
import Cookies from 'universal-cookie'
import React, { Component } from 'react'
import State from '../../services/StateMachine'
import { loadingScene, introScene, mainSceneTrainScene, mainSceneLearnScene, trainScene, learnScene } from './scenes'
import { kanaModes } from './params'

const scenes = {
    loading: new State("loading", loadingScene),
    intro: new State("intro", introScene),
    mainSceneTrain: new State("mainSceneTrain", mainSceneTrainScene),
    mainSceneLearn: new State("mainSceneLearn", mainSceneLearnScene),
    train: new State("train", trainScene),
    learn: new State("learn", learnScene)
}

export default class extends Component {
    constructor(props) {
        super(props)
        this.nextSceneDataLabel = "data-next-scene"
        this.defaultSceneLabel = "intro"
        this.currentKanaMode = 0
        this.cookies = new Cookies()
        this.lang = props.lang
        this.currentSceneLabel = this.defaultSceneLabel
        this.setFromProps(props)

        scenes.intro.linkState(scenes.mainSceneTrain)
        scenes.mainSceneTrain.linkState(scenes.mainSceneLearn)
        scenes.mainSceneLearn.linkState(scenes.mainSceneTrain)

        scenes.mainSceneTrain.linkState(scenes.train)
        scenes.mainSceneLearn.linkState(scenes.learn)
        scenes.train.linkState(scenes.learn)
        scenes.learn.linkState(scenes.train)

        this.state = {
            currentScene: scenes[this.currentSceneLabel]
        }
    }

    setFromProps(props) {
        if ("kanaMode" in props && kanaModes.indexOf(props) > -1) {
            this.currentKanaMode = kanaModes.indexOf(props)
        }

        if ("scene" in props) {
            this.currentSceneLabel = props.scene
        }
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

        // this.cookies.set("currentScene", nextSceneLabel)
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
                <Layout lang={this.lang}>{this.state.currentScene.render(this)}</Layout>
        )
    }
}