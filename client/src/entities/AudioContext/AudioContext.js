/** @jsx Declarity.createEntity */
import Declarity from 'declarity'

class AudioContext {
    // getChildContext = ({state}) => {
    //     return state
    // }

    create = ({context}) => {
        console.log('AudioContext create');
        const {actions} = context
        // console.log('AudioContext create', stuff)
        const audioContext = new window.AudioContext()
        let osc = audioContext.createOscillator()
        let freqAnalyser = audioContext.createAnalyser()
        let timeAnalyser = audioContext.createAnalyser()

        // osc.type = 'sine'
        // osc.frequency.value = 1000
        // osc.connect(analyser)
        // osc.start()

        //
        freqAnalyser.fftSize = 2048
        let bufferLength = freqAnalyser.frequencyBinCount
        let freqDataArray = new Uint8Array(bufferLength)
        let timeDataArray = new Uint8Array(timeAnalyser.frequencyBinCount)
        //
        freqAnalyser.getByteFrequencyData(freqDataArray)
        timeAnalyser.getByteTimeDomainData(timeDataArray)
        actions.setAnalyserDataArray(freqDataArray, timeDataArray)
        console.log('AudioContext create end');

        console.log(navigator.mediaDevices.getUserMedia({audio: true}))

        navigator.mediaDevices.getUserMedia({audio: true}).then((mediaStream) => {
            console.log('mediaStream', mediaStream)
            // const tracks = mediaStream.getAudioTracks()[0]
            // tracks.onunmute = () => {
            //     console.log('unmute')
            // }
            // console.log('tracks', tracks);
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
        // return {}
    }

    update = ({state}) => {
        // console.log('AudioContext update');

        state.freqAnalyser.getByteFrequencyData(state.freqDataArray)
        state.timeAnalyser.getByteTimeDomainData(state.timeDataArray)
        // console.log('state', state);
        // console.log(state.analyser)
    }

    // render = () => {
    //
    // }
}

export default AudioContext
