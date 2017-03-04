/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
import AudioContext from '../AudioContext'

class AudioStuff {
    create = () => {
        console.log('AudioStuff create');
    }

    render = () => {
        return (
            <AudioContext key="audiocontext">

            </AudioContext>
        )
    }
}

export default AudioStuff
