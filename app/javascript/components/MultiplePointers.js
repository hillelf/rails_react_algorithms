import React, {Component} from "react";

class MultiplePointers extends Component {
  render() {
    return (
      <>
        <h2>Multiple Pointers Algorithm</h2>
        <p>
          Creating pointers or values that correspond to an index or position
          and move towards the beginning, end or middle based on a certain
          condition. Efficient for solving problems with minimal space.
        </p>
        <p>
          Write a function called sumZero which accepts a sorted array of
          integers. The function should find the first pair where the sum is 0.
        </p>
        <pre>
          sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3] sumZero([-2, 0, 1, 3]);
          // undefined sumZero([1, 2, 3]); // undefined
        </pre>
      </>
    );
  }
}

export default MultiplePointers;
