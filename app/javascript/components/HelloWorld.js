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
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <p className="col-md-12 p-2">{this.props.greeting}</p>
          </div>
        </div>
      </>
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
