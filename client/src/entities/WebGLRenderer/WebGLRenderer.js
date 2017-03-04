/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class WebGLRenderer {
    getChildContext = ({state}) => {
        const {renderer} = state;

        return {renderer}
    }

    create = ({props}) => {
        let renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        props.container.appendChild(renderer.domElement)

        /* Demo stuff */
/*
        let scene = new THREE.Scene()

        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        let light = new THREE.AmbientLight(0xcccccc)
        scene.add(light)

        let geometry = new THREE.BoxGeometry(1, 1, 1)
        let material = new THREE.MeshLambertMaterial({color: 0xdd00f3, overdraw: 0.5})
        let cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 5

        let render = () => {
            requestAnimationFrame(render)
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera)
        }

        render()
*/

        return {renderer}
    }
    // Make sure that if an entity doesn't have a render function, that children are still 'rendered'
    render = ({children}) => {
        return children;
    }
}

export default WebGLRenderer
