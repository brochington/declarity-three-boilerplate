import Declarity from 'declarity'

class AudioContext {
    create = ({context}) => {
        const {actions} = context

        const audioContext = new window.AudioContext()
        let osc = audioContext.createOscillator()
        let freqAnalyser = audioContext.createAnalyser()
        let timeAnalyser = audioContext.createAnalyser()

        freqAnalyser.fftSize = 2048
        let bufferLength = freqAnalyser.frequencyBinCount
        let freqDataArray = new Uint8Array(bufferLength)
        let timeDataArray = new Uint8Array(timeAnalyser.frequencyBinCount)

        freqAnalyser.getByteFrequencyData(freqDataArray)
        timeAnalyser.getByteTimeDomainData(timeDataArray)
        actions.setAnalyserDataArray(freqDataArray, timeDataArray)

        navigator.mediaDevices.getUserMedia({audio: true}).then((mediaStream) => {
            const source = audioContext.createMediaStreamSource(mediaStream)
            source.connect(freqAnalyser)
            source.connect(timeAnalyser)
        })

        return {
            audioContext,
            freqAnalyser,
            timeAnalyser,
            bufferLength,
            freqDataArray,
            timeDataArray
        }

    }

    update = ({state}) => {
        state.freqAnalyser.getByteFrequencyData(state.freqDataArray)
        state.timeAnalyser.getByteTimeDomainData(state.timeDataArray)
    }
}

export default AudioContext
