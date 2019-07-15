import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/PhotoGallery.js";
import VideoGallery from "./components/VideoGallery.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="header">
          <h1>Stéphanie Martineau - Director / Editor</h1>
          <br />
          <a href="mailto:sv.martineau@gmail.com">sv.martineau@gmail.com</a>
        </div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Footer />
      <Route exact path="/" component={Home} />
      <Route path="/videos" component={VideoGallery} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
