/** @jsx Declarity.createEntity */
import Declarity from 'declarity'
// import

class Scene {
    create = ({context}) => {
        console.log('Scene create')
        const {actions} = context;

        actions.createScene('myScene')
    }

    update = (stuff) => {
        console.log('Scene update!', stuff);
    }

    // render = () => {
    //
    // }
}

export default Scene
