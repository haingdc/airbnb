import * as React from "react";

import * as Data from "../data";
import Slide from "./Slide";
import "./Carousel.css";
import * as scrollToAnimate from "./scrollToAnimate";

class Carousel extends React.Component {
  private scrollLeft: HTMLDivElement;
  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.handleRightNav = this.handleRightNav.bind(this);
  }
  renderSlides() {
    return Data.locations.map(el => (
      <Slide name={el.name} key={el.abbreviation} />
    ));
  }

  handleLeftNav(evt: React.MouseEvent<HTMLButtonElement>) {
    console.log("left click", this);
  }

  handleRightNav(evt: React.MouseEvent<HTMLButtonElement>) {
    console.log("right click", this);
    const { carouselViewport } = this.refs;
    var numOfSlidesToScroll = 1.5;
    var widthOfSlide = 120;
    var newPos =
      // tslint:disable-next-line:no-any
      (carouselViewport as any).scrollLeft + widthOfSlide * numOfSlidesToScroll;
    // tslint:disable-next-line:no-any
    (carouselViewport as any).scrollLeft = newPos;

    scrollToAnimate(carouselViewport, newPos, 200, "scrollLeft");
  }

  render() {
    return (
      <div className="carousel-container">
        <button
          className="carousel-nav carousel-left-nav"
          onClick={this.handleLeftNav}
        >
          &#60;
        </button>
        {/* tslint:disable-next-line:jsx-no-string-ref */}
        <div className="carousel-viewport" ref="carouselViewport">
          {this.renderSlides()}
        </div>
        <button
          className="carousel-nav carousel-right-nav"
          onClick={this.handleRightNav}
        >
          &#62;
        </button>
      </div>
    );
  }
}

export default Carousel;
