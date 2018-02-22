import * as React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const logo = require("./logo.svg");

class App extends React.Component {
  public render() {
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
        <SearchBar handleSearchLocation={this.searchLocation} />
      </div>
    );
  }

  private searchLocation(where: string, guests: number, when?: Date) {
    // do sth
  }
}

export default App;

export interface SearchLocationFunc {
  (where: string, guests: number, when?: Date): void;
}
