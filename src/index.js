import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntroPage } from './pages/Intro';
import { store } from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <IntroPage/>
    </Provider>,
    document.getElementById('root')
);
