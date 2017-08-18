import Declarity from 'declarity'
import * as THREE from 'three'

const onMouseMove = (event, params) => {
    const {setState, state: {mouse}} = params
    mouse.x = (event.clientX / event.target.width) * 2 - 1
    mouse.y = - (event.clientY / event.target.height) * 2 + 1
}

class MousePosition {
    getChildContext = ({state}) => {
        return state
    }

    create = ({context, getParams}) => {
        const {containerEl} = context;
        let mouse = new THREE.Vector2()

        const localOnMouseMove = event => onMouseMove(event, getParams())
        const localOnMouseOver = event => {
            containerEl.addEventListener('mousemove', localOnMouseMove, false)
        }
        const localOnMouseLeave = event => {
            containerEl.removeEventListener('mousemove', localOnMouseMove)
            mouse.x = null
            mouse.y = null
        }

        containerEl.addEventListener('mouseover', localOnMouseOver, false)
        containerEl.addEventListener('mouseleave', localOnMouseLeave, false)

        return {mouse}
    }

    render = ({children}) => {
        return children
    }
}

export default MousePosition
