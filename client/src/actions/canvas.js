const canvasActions = {
    setStageCanvasId(state, actions) {
        return state()
    },
    setCanvas(state, actions, canvas) {
        return state().set('canvas', canvas)
    }
}

export default canvasActions
