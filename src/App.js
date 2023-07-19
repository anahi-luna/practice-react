import laImagenDelLogo from './logo.svg';
import './App.css';
import Title from './Title';
import sushi from './assets/images/rollos-de-sushi.JPG'
import licuadora from './assets/images/adfF.JPG'
import auron from './assets/images/pcdeverdad.JPG'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Title />
      <Title />
      <Navbar />
      <header className="App-header">
        <img src={laImagenDelLogo} className="App-logo" alt="logo" />
        <img src=  '/images/rollos-de-sushi.jpg' />
        <img src=  {licuadora} />
        <img src=  {auron} />
        <img src=  {sushi} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
