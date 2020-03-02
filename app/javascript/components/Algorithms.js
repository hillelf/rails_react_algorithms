import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {Link} from "react-router-dom";

import FrequencyCounter from "./FrequencyCounter";
import MultiplePointers from "./MultiplePointers";
import SlidingWindow from "./SlidingWindow";

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

function Algorithm(props) {
  const [active, setActive] = useState("MultiplePointers");
  const {algorithms} = props;

  const components = {
    FrequencyCounter,
    MultiplePointers,
    SlidingWindow
  };

  const ActiveAlgorithm = components[active];

  const algorithmList = algorithms.map((algo, i) => {
    return (
      <li
        key={i}
        className="list-group-item"
        onClick={() => {
          setActive(algo.name);
        }}
      >
        {algo.name}
      </li>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <ul className="list-group col">{algorithmList}</ul>
        </div>
        <div className="col-8">
          <ActiveAlgorithm />
        </div>
      </div>
    </div>
  );
}

const structuredSelector = createStructuredSelector({
  algorithms: state => state.algorithms
});

const mapDispatchToProps = {getAlgorithms};

export default connect(structuredSelector, mapDispatchToProps)(Algorithm);
