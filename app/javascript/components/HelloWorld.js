import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const GET_ALGORITHMS_REQUEST = "GET_ALGORITHMS_REQUEST";

function getAlgorithms() {
  console.log("getAlgorithms() Action!");
  return {
    type: GET_ALGORITHMS_REQUEST
  };
}

class HelloWorld extends React.Component {
  render() {
    const {algorithms} = this.props;
    const algorithmList = algorithms.map((algo, i) => {
      return <li key={i}>{algo.name}</li>;
    });

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button
          className="get-alog-btn"
          onClick={() => this.props.getAlgorithms()}
        >
          get algorithms
        </button>
        <ul>{algorithmList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  algorithms: state => state.algorithms
});

const mapDispatchToProps = {getAlgorithms};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
