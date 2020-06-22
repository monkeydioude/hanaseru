import Layout from '../components/Layout'
import Cookies from 'universal-cookie'
import React, { Component } from 'react'
import State from '../services/StateMachine'

const scenes = {
    intro: new State("intro", introScene),
    mainSceneTrain: new State("mainSceneTrain", mainSceneTrainScene),
    mainSceneLearn: new State("mainSceneLearn", mainSceneLearnScene),
    train: new State("train", trainScene),
    learn: new State("learn", learnScene)
}

function introScene() {
    return (
        <p>Weshu aloru</p>
    )
}

function mainSceneTrainScene() {

}

function mainSceneLearnScene() {

}

function trainScene() {

}

function learnScene() {

}

export default class extends Component {
    constructor(props) {
        super(props)

        scenes.intro.linkState(scenes.mainSceneTrain)
        scenes.mainSceneTrain.linkState(scenes.mainSceneLearn)
        scenes.mainSceneLearn.linkState(scenes.mainSceneTrain)

        scenes.mainSceneTrain.linkState(scenes.train)
        scenes.mainSceneLearn.linkState(scenes.learn)
        scenes.train.linkState(scenes.learn)
        scenes.learn.linkState(scenes.train)

        this.state = {
            currentScene: scenes["intro"]
        }
    }

    componentDidMount() {
        this.setState({"currentScene": scenes["intro"]})
    }

    render() {
        return (
            <Layout> {this.state.currentScene.render()} </Layout>
        )
    }
}