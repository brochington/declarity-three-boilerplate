const cameraActions = {
    setCamera: (state, actions, camera) => {
        return state().set('camera', camera)
    }
}

export default cameraActions
