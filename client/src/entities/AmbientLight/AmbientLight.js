/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class AmbientLight {
    create = ({context}) => {
        console.log('AmbientLight create');
        let light = new THREE.AmbientLight(0x404040)
        const {renderer, scene, camera} = context;
        console.log('scene?', scene);
        scene.add(light)

        // renderer.render(scene, )
        return {light}
    }

    // render = () => {
    //
    // }
}

export default AmbientLight
