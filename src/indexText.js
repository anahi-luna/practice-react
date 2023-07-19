import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
/* import ReactDOM from 'react-dom'; */
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const list = <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
</ul>

let visitor = {
    name: 'Jane Doe',
    age: 14
}

let pStyles = {
    fontSize: '10px',
    textAlign: 'center',
    color: 'olive'
}

root.render(
    <StrictMode>
        <h2 className='main-title'>
            Hello
            {visitor.name}
            {visitor.age > 18 ? " Welcome" : "Sorry can't get inside"}
        </h2>
        <br />
        <p style={pStyles}>loremjdsnjdnjncskjdnvsjdvsdvnsdvsdovsdivdvsdvsdvdvsdvsdvsdvsdvdv</p>
        {list}
    </StrictMode>
);