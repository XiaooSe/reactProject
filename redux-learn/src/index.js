import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from './reducers/counter';

const store = createStore(reducer);

store.dispatch({
    type: 'INCREMENT'
})

const render = () => {
    ReactDOM.render(
        <App
            onIncrement={ () => store.dispatch({ type: "INCREMENT" }) }
            onDecrement={ () => store.dispatch({ type: "DECREMENT" }) }
            value={ store.getState() }
        />, document.getElementById('root'));
};

render();

store.subscribe(render);

registerServiceWorker();