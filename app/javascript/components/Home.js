import React, {Component} from "react";

import Canvas from "./Canvas";

class Home extends Component {
  render() {
    return (
      <>
        <p className="col-md-12 p-2 mt-5">ahhhhh...it's good to be home.</p>
        <Canvas text="There's no place like home!" />
      </>
    );
  }
}

export default Home;
