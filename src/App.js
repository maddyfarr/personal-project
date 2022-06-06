import logo from './logo.svg';
import Posts from "./components/Posts";
import './App.scss';
import Title from './components/Title';
import Header from './containers/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>Maddys App</h1>
      </header>
      <Title />
      <Posts />
    </div>
  );
}

export default App;