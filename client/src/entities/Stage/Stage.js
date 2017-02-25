/** @jsx Declarity.createEntity */
import Declarity from 'declarity'

import Scene from '../Scene'

// class Stage extends Declarity.Entity {
class Stage {
    getChildContext = ({state}) => {
        const {appState, actions} = state;

        return {
            appState,
            actions
        }
    }

    create = ({props, setState}) => {
        console.log('hit Stage create');

        const passedState = props.cbRetriever(setState)

        return passedState;
    }

    update = (stuff) => {
        console.log('update!', stuff)
    }

    render = ({state}) => {
        console.log('hit stage render');
        return (
            <Scene key="scene" />
        )
    }
}

export default Stage
