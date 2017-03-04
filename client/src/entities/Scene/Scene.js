/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class Scene {
    getChildContext = ({state}) => {
        const {scene} = state;

        return {
            scene
        }
    }

    create = ({context}) => {
        console.log('Scene create', context)
        // const {actions} = context;
        const scene = new THREE.Scene()

        // scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

        return {scene}
        // actions.createScene('myScene')
    }

    update = (stuff) => {
        // console.log('Scene update!', stuff);
    }

    render = ({children}) => children
}

export default Scene
