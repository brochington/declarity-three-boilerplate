import React, {Component} from "react"
import Declarity from 'declarity'

import Stage from '../entities/Stage'

import AbstractComponent from './AbstractComponent'

const noop = () => {}

class StageCanvas extends AbstractComponent {
    entitySetState = noop
    stage = Stage
    onContainerLoad = (el) => {

        this.containerEl = el;
        // this.setState({})
        this.context.actions.setCanvas(el)
        // this.forceUpdate()
        // Declarity.register(Declarity.createEntity(Stage, {
        //     containerEl: el,
        //     cbRetriever: this.getStageSetState,
        //     key: 'myStage'
        // }), this.context)

        if (module.hot) {
            console.log('Accepted??');
            module.hot.accept('../entities/Stage', (stuff) => {
                console.log('maybe....', stuff);
                this.stage = require('../entities/Stage')
                console.log(this.stage, 'yo')
                // const newStage = require(stuff[0]);
                // Declarity.register(Declarity.createEntity(newStage, {
                //     containerEl: el,
                //     cbRetriever: this.getStageSetState,
                //     key: 'myStage'
                // }), this.context)
            })
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {appState} = nextContext;

        if (appState.has('canvas')) {
            Declarity.register(Declarity.createEntity(this.stage, {
                containerEl: appState.get('canvas'),
                key: 'myStage'
            }), nextContext)
        }
    }

    render() {
        return (
            <div>
                <div ref={this.onContainerLoad} id="container">
                </div>
            </div>
        )
    }
}

export default StageCanvas
