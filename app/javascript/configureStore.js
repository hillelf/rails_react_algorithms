import {createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
  algorithms: [
    {
      name: "FrequencyCounter",
      path: "/frequencycounter"
    },
    {
      name: "MultiplePointers",
      path: "/multiplepointers"
    },
    {
      name: "SlidingWindow",
      path: "/slidingwindow"
    },
    {
      name: "DivideConquer",
      path: "/divideConquer"
    },
    {
      name: "Recursion",
      path: "/recursion"
    },
    {
      name: "Sorting",
      path: "/sorting"
    },
    {
      name: "DataStructures",
      path: "/dataStructures"
    },
    {
      name: "Graphs",
      path: "/graphs"
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
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}
