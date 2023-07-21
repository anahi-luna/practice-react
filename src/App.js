// Assets
import './assets/css/App.css';
import laImagenDelLogo from './assets/images/logo.svg';
import sushi from './assets/images/rollos-de-sushi.JPG';
import licuadora from './assets/images/adfF.JPG';
import auron from './assets/images/pcdeverdad.JPG';

//Componentes
import Title from './components/Title';
import Header from './components/Header';
import User from './components/User';
import UserList from './components/UsersList';

//Class Component
import Counter from './components/Counter';

// Data
import db from './data/usersDB.json';

let jane = {
  name:'Jane Doe',
  email: "jdoe@gmail.com",
  bio: 'dnfosdnfifoweiwfeoiwneifweifjweoifwjoefjwoef'
}

function App() {
  return (
    <div className="App">
      <Header />

      <Counter />
    <UserList listado = {db} title='Listado de personajes' />

      <Title fecha= "20 de julio" pais="Filipinas" />

      <Title fecha= "19 de julio" pais="Argentina" >
        <del className='text-danger'>A ver si esto se ve</del>
        <br/>
        <strong>otras más</strong>
        <br/>
        <em>otras más</em>
      </Title>
      <User {...jane} />  

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
