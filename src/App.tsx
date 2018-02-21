import * as React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Airbnb</h1>
        </header>
        <p className="App-intro">
          Airbnb Book unique <a href="/sitemaps/v2">homes</a> and experiences
          all over the world.
        </p>
        <SearchBar />
      </div>
    );
  }
}

export default App;
