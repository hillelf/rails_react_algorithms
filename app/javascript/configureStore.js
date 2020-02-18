import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";

const initialState = {
  algorithms: [
    {
      name: "Frequency Counter",
      path: "/"
    },
    {
      name: "Multiple Pointers",
      path: "/"
    },
    {
      name: "Sliding Window",
      path: "/"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_ALGORITHMS_SUCCESS":
      return {algorithms: action.json.algorithms};
      break;
    default:
      break;
  }
  return state;
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}
