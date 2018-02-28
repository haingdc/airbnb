import * as React from "react";

import "./Slide.css";

export interface Props {
  name: string;
}

class Slide extends React.Component<Props, {}> {
  render() {
    const { name } = this.props;
    return <div className="slide">{name}</div>;
  }
}

export default Slide;
