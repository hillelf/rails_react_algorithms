import {createStore} from "redux";

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
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, initialState);
  return store;
}
