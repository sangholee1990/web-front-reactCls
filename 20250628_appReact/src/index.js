import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComonent from './components/WrapComonent.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <WrapComonent />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <WrapComonent />
    </BrowserRouter>
);

