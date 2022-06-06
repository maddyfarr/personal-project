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
          <h4>Maddy's App</h4>
          <img className="Profile-image" src={SunImage} alt="blog" />
          <p className="intro-text">Welcome to my happy place. <br></br>Here, I write about everything that makes me curious.</p>
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