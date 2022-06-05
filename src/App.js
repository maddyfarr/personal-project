import logo from './logo.svg';
import Posts from "./components/Posts";
import './App.scss';
import Title from './components/Title';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Maddys App</h1>
      </header>
      <Title />
      <Posts />
    </div>
  );
}

export default App;