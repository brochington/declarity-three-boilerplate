import {Scene} from 'three'

const sceneActions = {
    createScene: (state, actions, sceneID) => {
        const scene = new Scene()

        return state().setIn(['scenes', sceneID], scene)
    },
    setScene: (state, actions, scene) => {
        return state().set('scene', scene)
    }
}

export default sceneActions
