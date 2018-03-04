import * as React from "react";

import * as Data from "../data";
import Slide from "./Slide";
import "./Carousel.css";
import scrollToAnimate from "./scrollToAnimate";

interface State {
  numOfSlidesToScroll: number;
}

class Carousel extends React.Component<{}, State> {
  refs: {
    carouselViewport: HTMLDivElement;
  };

  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.onResize = this.onResize.bind(this);
    this.handleRightNav = this.handleRightNav.bind(this);
    this.state = {
      numOfSlidesToScroll: 4,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
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

  private onResize() {
    console.log("resizing");
  }

  private renderSlides() {
    return Data.locations.map(el => (
      <Slide name={el.name} key={el.abbreviation} />
    ));
  }

  private handleLeftNav(evt: React.MouseEvent<HTMLButtonElement>) {
    console.log("left click", this);
    const { carouselViewport } = this.refs;
    var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    var widthOfSlide = 120;
    var newPos =
      carouselViewport.scrollLeft - widthOfSlide * numOfSlidesToScroll;
    // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    var timeToMoveOneSlide = 200;
    var totalTimeToMove = Math.min(
      numOfSlidesToScroll * timeToMoveOneSlide,
      400,
    );

    scrollToAnimate({
      element: carouselViewport,
      to: newPos,
      duration: totalTimeToMove,
      scrollDirection: "scrollLeft",
    });
  }

  private handleRightNav(evt: React.MouseEvent<HTMLButtonElement>) {
    console.log("right click", this);
    const { carouselViewport } = this.refs;
    var numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    var widthOfSlide = 120;
    var newPos =
      carouselViewport.scrollLeft + widthOfSlide * numOfSlidesToScroll;
    // var newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    var timeToMoveOneSlide = 200;
    var totalTimeToMove = Math.min(
      numOfSlidesToScroll * timeToMoveOneSlide,
      400,
    );

    scrollToAnimate({
      element: carouselViewport,
      to: newPos,
      duration: totalTimeToMove,
      scrollDirection: "scrollLeft",
    });
  }
}

export default Carousel;
