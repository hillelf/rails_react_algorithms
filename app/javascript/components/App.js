import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";

// redux store
import configureStore from "../configureStore";

// bootstrap for layout, etc..
import "bootstrap/dist/css/bootstrap.min.css";

//components
import HelloWorld from "./HelloWorld";
import Algorithms from "./Algorithms";
import Navbar from "./Navbar";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" render={() => "Home!"} />
              <Route
                exact
                path="/hello"
                render={() => <HelloWorld greeting="Hello World!" />}
              />
              <Route
                exact
                path="/algorithms"
                render={() => <Algorithms greeting="Friend" />}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
