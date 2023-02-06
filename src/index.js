import React from 'react';
import ReactDOM from 'react-dom/client';
// import ToggleColorMode from './components/darkMode/darMode';
import Main from './components/main/Main';
import NavBar from './components/navbar/NavBar';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavBar />
        <Main />
    </React.StrictMode>,
);
