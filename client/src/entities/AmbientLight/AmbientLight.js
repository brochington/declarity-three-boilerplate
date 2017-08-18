import Declarity from 'declarity'
import * as THREE from 'three'

class AmbientLight {
    create = ({context}) => {
        let light = new THREE.AmbientLight(0x404040)
        const {scene, camera, actions} = context;

        scene.add(light)

        actions.setLight(light)

        return {light}
    }
}

export default AmbientLight
