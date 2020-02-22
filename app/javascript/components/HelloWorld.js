import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const GET_ALGORITHMS_REQUEST = "GET_ALGORITHMS_REQUEST";
const GET_ALGORITHMS_SUCCESS = "GET_ALGORITHMS_SUCCESS";

function getAlgorithms() {
  console.log("getAlgorithms() Action!");
  return dispatch => {
    dispatch({type: GET_ALGORITHMS_REQUEST});
    return fetch(`v1/algorithms.json`)
      .then(response => response.json())
      .then(json => dispatch(getAlgorithmsSuccess(json)))
      .catch(error => console.log(error));
  };
}

export function getAlgorithmsSuccess(json) {
  return {
    type: GET_ALGORITHMS_SUCCESS,
    json
  };
}

class HelloWorld extends React.Component {
  render() {
    const {algorithms} = this.props;
    const algorithmList = algorithms.map((algo, i) => {
      return <li key={i}>{algo.name}</li>;
    });

    return <React.Fragment>{this.props.greeting}</React.Fragment>;
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
