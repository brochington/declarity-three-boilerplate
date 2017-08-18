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
        console.log('Scene create')
        const {actions} = context;
        const scene = new THREE.Scene()

        actions.setScene(scene)
        return {scene}
    }

    render = ({children}) => children
}

export default Scene
