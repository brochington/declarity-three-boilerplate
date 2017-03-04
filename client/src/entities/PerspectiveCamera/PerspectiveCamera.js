/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class PerspectiveCamera {
    getChildContext = ({state}) => {
        const {camera} = state

        return {camera}
    }

    create = ({context}) => {
        console.log('create camera', context);
        const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.25, 16)
        camera.position.set(10, 1, 15)

        const {renderer, scene} = context;
        // camera.lookAt(scene.position)

        // window.setInterval(() => {
        // renderer.render(scene, camera)
        // }, 100)
        // camera.position.z = 1

        let render = () => {
            requestAnimationFrame(render)
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;

            renderer.render(scene, camera)
        }

        render()


        return {camera}
    }

    update = () => {

    }
}

export default PerspectiveCamera
