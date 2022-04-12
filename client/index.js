import React from 'react';
import { createRoot } from 'react-dom/client';

// import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss'; 

// createRoot designates which DOM node will act as the 'root' of our React App.
const root = createRoot(document.getElementById('root'));
root.render(<App />);