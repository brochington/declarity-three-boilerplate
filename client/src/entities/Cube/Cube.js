/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import * as THREE from 'three'

class Cube extends Declarity.Entity {
    create = ({context}) => {

        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
        let material = new THREE.MeshLambertMaterial({color: 0xdd00f3, overdraw: 0.5})
        let cube = new THREE.Mesh(geometry, material)
        context.scene.add(cube)

        let wireframe = new THREE.WireframeGeometry(geometry)
        let line = new THREE.LineSegments(wireframe)
        line.material.depthTest = false
        line.material.opacity = 1
        line.material.transparent = true
        // console.log(line.material.color)
        context.scene.add(line)

        return {cube, line}
    }

    shouldUpdate = () => {
        // console.log('inside cube shouldUpdate');
        return true;
    }

    update = ({state}) => {
        // const {cube, line} = state;
        //
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
        // line.rotation.x += 0.01;
        // line.rotation.y += 0.01;
    }

    willUnmount = ({state, context}) => {
        context.scene.remove(state.cube)
        context.scene.remove(state.line)
    }

    // render = () => {
    //
    // }
}

export default Cube
