import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { counterSlice, counterEpic } from '../entities/counter';

const epicMiddleware = createEpicMiddleware();

function getStore() {
    const reducers = {
        counter: counterSlice.reducer
    };

    const epics = [counterEpic];

    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(combineEpics(counterEpic));

    return store;
}

export {
    getStore
};