import React, {Component} from "react"
import Declarity from 'declarity'

import Stage from '../entities/Stage'

import AbstractComponent from './AbstractComponent'

const noop = () => {}

class StageCanvas extends AbstractComponent {
    entitySetState = noop

    getStageSetState = (entitySetState) => {
        this.entitySetState = entitySetState

        // window.setInterval(() => {
        //     this.forceUpdate()
        // }, 2000)
        // this.forceUpdate()

        // window.setTimeout(() => {
        //     this.forceUpdate()
        // }, 1000)

        return this.context;
    }

    onContainerLoad = (el) => {
        // will need to pass through some kind of callback so the
        // state tree within Declarity will be called.

        Declarity.register(Declarity.createEntity(Stage, {
            containerEl: el,
            cbRetriever: this.getStageSetState
        }))
    }

    render() {
        this.entitySetState(this.context)

        return (
            <div>
                StageCanvas component
                <div ref={this.onContainerLoad} id="container">
                    {/* <canvas ref={this.onCanvasLoad} id="stage-canvas"/> */}
                </div>
            </div>
        )
    }
}

export default StageCanvas
