const audioActions = {
    setAnalyserDataArray: (state, action, freqArray, timeArray) => {
        return state()
                .setIn(['audio', 'freqArray'], freqArray)
                .setIn(['audio', 'timeArray'], timeArray)
    }
}

export default audioActions
