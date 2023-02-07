import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/store';

import NavBar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import NewItem from './components/forms/newItem/NewItem';
import Page404 from './components/pages/Page404';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/calc/' element={<Main />} />
                <Route path='/edit/' element={<NewItem />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
);
