import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from '../modules'
import epics from '../epics'
import Game from './Game'

const debugState = reducer => (state, action) => {
    console.log('ACTION:', action);
    const newState = reducer(state, action);
    console.log('NEW STATE:', newState);

    return newState;
}

const epicMiddleware = createEpicMiddleware(epics)
const store = createStore(
    debugState(reducers),
    applyMiddleware(epicMiddleware)
)

export default () =>
    <Provider store={ store }>
        <Game />
    </Provider>
