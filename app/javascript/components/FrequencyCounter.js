import React, {Component} from "react";

class FrequencyCounter extends Component {
  render() {
    return (
      <>
        <h2 className="mt-5">Frequency Counter Algorithm</h2>
        <p>
          This pattern uses objects or sets to collect values/frequencies of
          values.
        </p>
        <p>
          This can often avoid the need for nested loops or 0(n<sup>2</sup>)
          operations with arrays and strings.
        </p>
      </>
    );
  }
}

export default FrequencyCounter;
