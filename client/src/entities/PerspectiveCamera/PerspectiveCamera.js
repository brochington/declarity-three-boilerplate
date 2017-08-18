import Declarity from 'declarity'
import * as THREE from 'three'

class PerspectiveCamera {
    getChildContext = ({state}) => {
        const {camera} = state

        return {camera}
    }

    create = ({context}) => {
        const {actions} = context;

        const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.25, 16)
        camera.position.set(10, 1, 15)
        console.log('gonna set?', camera);
        actions.setCamera(camera)

        return {camera}
    }

    update = ({context, state}) => {
        const {renderer, scene, appState} = context
        const {camera} = state

        renderer.render(scene, camera)

    }
}

export default PerspectiveCamera
