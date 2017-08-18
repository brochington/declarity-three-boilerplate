import Declarity from 'declarity'
import * as THREE from 'three'

import WebGLRenderer from '../WebGLRenderer'
import MousePosition from '../MousePosition'
import Scene from '../Scene'

import PerspectiveCamera from '../PerspectiveCamera'
import AmbientLight from '../AmbientLight'

import SceneContent from '../SceneContent'
import Cube from '../Cube'

import AudioContext from '../AudioContext'

class Stage {
    getChildContext = ({state, props, context}) => {
        const {appState, actions} = context;
        const {containerEl} = props

        return {
            appState,
            actions,
            containerEl
        }
    }

    create = ({props, setState, getParams, context}) => {
        const {cbRetriever, containerEl} = props

        const render = () => {
            requestAnimationFrame(render)

            setState({})
        }

        render()

        return {};
    }

    render = ({state, props}) => {
        return [
            <AudioContext key="audioContext"/>,
            <WebGLRenderer key="webglrenderer" container={props.containerEl}>
                <MousePosition key="mousePosition">
                    <Scene key="scene">
                        <PerspectiveCamera key="perspectiveCamera" />
                        <AmbientLight key="ambientLight" />
                        <SceneContent key="sceneContent" />
                    </Scene>
                </MousePosition>
            </WebGLRenderer>
        ]
    }
}

export default Stage
