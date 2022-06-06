import Posts from "./components/Posts";
import './App.scss';
import Title from './components/Title';
import Header from './containers/Header';
import SunImage from './sun.JPG';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main-content">
        <header className="App-header">
          <img className="Profile-image" src={SunImage} alt="blog" />
          <h4>~Madeleine Farr~</h4>
          <p className="intro-text">My name is Maddy and I am front-end developer who likes to write, read fantasy, rock climb, run, mess around on a guitar, learn German, paint, learn random facts.</p>
          <p>Self confessed introvert.</p>
        </header>
        <div className="Blog-posts">
          <Title />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;