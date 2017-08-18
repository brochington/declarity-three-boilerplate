import canvasActions from './canvas'
import sceneActions from './scene'
import cameraActions from './camera'
import lightActions from './light'
import audioActions from './audio'

export default {
    ...canvasActions,
    ...sceneActions,
    ...cameraActions,
    ...lightActions,
    ...audioActions
}
