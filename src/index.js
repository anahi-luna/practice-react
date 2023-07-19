import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
/* import ReactDOM from 'react-dom'; */
import './index.css';
import App from './App';
/* import Title from './Title';
 */
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <StrictMode>
    <App />
    </ StrictMode>
);
/* const container = document.getElementById('root')

ReactDOM.render(
  <div>
  <StrictMode>
    <App />
  </StrictMode>
  <h2>Hola</h2>
  </div>
  ,
container 
) */