import * as THREE from 'three'


class Raycaster {
    getChildContext = ({state}) => {
        return state
    }

    create = () => {
        const raycaster = new THREE.Raycaster()
        const intersects = []

        return {raycaster, intersects}
    }

    update = ({context, state}) => {
        const {mouse, appState} = context
        const {raycaster} = state
        const camera = appState.get('camera')
        const scene = appState.get('scene')

        raycaster.setFromCamera(mouse, camera)

        let intersects = raycaster.intersectObjects(scene.children)

        return {intersects}
    }

    render = ({children}) => {
        return children;
    }
}

export default Raycaster
