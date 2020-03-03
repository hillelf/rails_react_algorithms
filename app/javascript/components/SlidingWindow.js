import React, {Component} from "react";

class SlidingWindow extends Component {
  render() {
    return (
      <>
        <h2 className="mt-5">Sliding Window Algorithm</h2>
        <p>
          This pattern involves creating a window which can either be an array
          or number from one position to another.
        </p>
        <p>
          Depending on a certain condition, the window either increases or
          closes (and a new window is created).
        </p>
        <p>
          Useful for keeping track of a subset of data in an array or string.
        </p>
      </>
    );
  }
}

export default SlidingWindow;
