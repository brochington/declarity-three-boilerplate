import {Scene} from 'three'

const sceneActions = {
    createScene: (state, actions, sceneID) => {
        console.log('createScene', Scene);
        const scene = new Scene()
        return state().setIn(['scenes', sceneID], scene);
    }
}

export default sceneActions
