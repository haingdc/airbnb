import * as React from "react";

import * as Data from "../data";
import Slide from "./Slide";
import "./Carousel.css";

class Carousel extends React.Component {
  renderSlides() {
    return Data.locations.map(el => (
      <Slide name={el.name} key={el.abbreviation} />
    ));
  }

  render() {
    return (
      <div className="carousel-container">
        <button className="carousel-nav carousel-left-nav">&#60;</button>
        <div className="carousel-viewport">{this.renderSlides()}</div>
        <button className="carousel-nav carousel-right-nav">&#62;</button>
      </div>
    );
  }
}

export default Carousel;
