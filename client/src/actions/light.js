const lightActions = {
    setLight: (state, actions, light) => {
        // TODO: Gonna want to have more than one light...
        return state().set('light', light);
    }
}

export default lightActions
