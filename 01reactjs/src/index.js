import ReactDOM from 'react-dom/client';
import App from './App';
import ChaiPio from './Chai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>   // here no need of the react code because it is mainly used for the safe mode only u can remove it also
    <>   
    <App />
    <ChaiPio />
    </>
  // </React.StrictMode>
);

// index.js and main.jsx in vite are the main entry point from where execution of the project is gets start
