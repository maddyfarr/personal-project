import './App.scss';
import Header from './containers/Header';

import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home.js";
import Post from "./pages/Post.js";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={Post} path="/:slug" />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;