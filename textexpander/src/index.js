import React from 'react';
import ReactDOM from 'react-dom';
import WebsiteApp from './website/WebsiteApp';
import PopupApp from './popup/PopupApp';
import './index.css';

// Identify the root element to determine which app to render
const rootElement = document.getElementById('root') || document.getElementById('popup-root');

if (rootElement) {
    ReactDOM.render(
        <React.StrictMode>
            {rootElement.id === 'root' ? <WebsiteApp /> : <PopupApp />}
        </React.StrictMode>,
        rootElement
    );
} else {
    console.error("Root element not found. Make sure 'root' or 'popup-root' div is in the HTML file.");
}