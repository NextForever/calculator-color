import React from 'react';
import ReactDOM from 'react-dom/client';
import AreaImage from './components/auto/AreaImage';
// import Main from './components/main/Main';
import NavBar from './components/navbar/NavBar';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavBar />
        <AreaImage />
        {/* <Main /> */}
    </React.StrictMode>,
);
