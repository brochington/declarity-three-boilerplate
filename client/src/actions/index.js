import canvasActions from './canvas'
import sceneActions from './scene'
import audioActions from './audio'

export default {
    ...canvasActions,
    ...sceneActions,
    ...audioActions
}
