import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Actors from './Components/Actors';
import Movies from './Components/Movies';
import Home from './Components/Home';

const App = () => {

  return (
    <BrowserRouter>
      <nav className="nav">
        <div className="logo"><h1>Movie<span>WEB</span></h1>
          </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <Link to="/"><li className="nav-li">Home</li></Link>
            <Link to="/actors"><li className="nav-li">Actors</li></Link>
            <Link to="/movies"><li className="nav-li">Movies</li></Link>
           
          </ul>
        </div>
      </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/actors" component={Actors} />
        <Route path="/movies" component={Movies} />
    </BrowserRouter>
  );

}

export default App;
