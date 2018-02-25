import * as React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ExploreBar from "./components/ExploreBar";
import Category from "./interfaces/Category";

const logo = require("./logo.svg");

interface State {
  categories: Category[];
}

class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.searchLocation = this.searchLocation.bind(this);
    this.state = {
      categories: [
        { name: "for you", path: "for_path" },
        { name: "homes", path: "homes" },
        { name: "experiences", path: "experiences" },
        { name: "places", path: "places" },
      ],
    };
  }

  public render() {
    const { categories } = this.state;
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
        <ExploreBar categories={categories} />
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
