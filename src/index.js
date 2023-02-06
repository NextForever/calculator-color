import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Main from './components/main/Main';
import NavBar from './components/navbar/NavBar';
import store from './redux/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <NavBar />

        <Main />
    </Provider>,
);
