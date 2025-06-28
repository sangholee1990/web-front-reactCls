import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComonent from './components/WrapComonent.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import modal from "./store/modal.js"
import { CookiesProvider } from 'react-cookie';

// 스토어 생성
const store = configureStore({
    reducer : {
        modal 
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <WrapComonent />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <CookiesProvider>
                <WrapComonent />
            </CookiesProvider>
        </Provider>
    </BrowserRouter>
);
