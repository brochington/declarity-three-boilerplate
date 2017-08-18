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

        return {renderer}
    }

    render = ({children}) => {
        return children;
    }
}

export default WebGLRenderer
