import { createStore } from 'redux';
import { appReducer } from './appReducer';
import { INIT_STATE } from './../data/initState';

export const store = createStore(
    appReducer,
    INIT_STATE,
    window.devToolsExtension && window.devToolsExtension()
);
