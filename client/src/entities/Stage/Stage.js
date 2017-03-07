/** @jsx Declarity.createEntity */
import Declarity from 'declarity'

import WebGLRenderer from '../WebGLRenderer'
import Scene from '../Scene'

import PerspectiveCamera from '../PerspectiveCamera'
import AmbientLight from '../AmbientLight'

import Cube from '../Cube'

import AudioStuff from '../AudioStuff'

const RotateSystem = {
    update: ({state}) => {
        const {cube, line} = state;

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        line.rotation.x += 0.01;
        line.rotation.y += 0.01;
    }
}

const positionSystem = (x, y, z) => {
    return {
        create: ({state}) => {
            const {cube, line} = state;

            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;

            line.position.x = x;
            line.position.y = y;
            line.position.z = z;
        },

        update: ({state}) => {
            const {cube, line} = state;

            cube.position.x = x;
            cube.position.y = y;
            cube.position.z = z;

            line.position.x = x;
            line.position.y = y;
            line.position.z = z;
        }
    }
}

const colorSystem = (r, g, b) => {
    return {
        create: ({state}) => {
            const {line} = state;

            line.material.color.r = r;
            line.material.color.b = b;
            line.material.color.g = g;
        },

        update: ({state}) => {
            const {line} = state;

            line.material.color.r = r;
            line.material.color.b = b;
            line.material.color.g = g;
        }
    }
}

class Stage {
    getChildContext = ({state}) => {
        const {appState, actions} = state;

        return {
            appState,
            actions
        }
    }

    create = ({props, setState}) => {
        console.log('hit Stage create');

        const passedState = props.cbRetriever(setState)

        const render = () => {
            requestAnimationFrame(render)

            setState({})
        }

        render()

        return {...passedState, count: 0, osc: 0};
    }

    update = ({state, osc}) => {
        const newCount = state.count + 1;
        const newOsc = newCount % 100 > 50 ? state.osc - 0.011 : state.osc + 0.01

        return {count: newCount, osc: newOsc}
    }

    render = ({state, props}) => {
        const {appState} = state;
        const freqArray = appState.getIn(['audio', 'freqArray'], [])
        const timeArray = appState.getIn(['audio', 'timeArray'], [])

        // console.log(state.osc);
        const cubes = [...Array(Math.floor(state.count % 200))].map((k, i) => i).map((num) => {
        // const cubes = [...Array(Math.floor(400))].map((k, i) => i).map((num) => {
            // const x = state.osc + Math.floor(num / 15)
            const x = num / 4
            // const y = (Math.floor(num % 10)) / 2
            const y = freqArray[num] / 50
            // const y = num * state.osc * 0.1
            const col = ((timeArray[num] - 64) / 128)
            // return <Cube key={`cube_${num}`} systems={[RotateSystem, positionSystem(x, y, y)]} />
            return <Cube key={`cube_${num}`} systems={[RotateSystem, positionSystem(x, y, 0), colorSystem(col, col, col)]} />
        })

        return [
            <AudioStuff key="audiostuff"/>,
            <WebGLRenderer key="webglrenderer" container={props.containerEl}>
                <Scene key="scene">
                    <PerspectiveCamera key="perspectiveCamera" />
                    <AmbientLight key="ambientLight" />
                    {cubes}
                </Scene>
            </WebGLRenderer>
        ]
    }
}

export default Stage
