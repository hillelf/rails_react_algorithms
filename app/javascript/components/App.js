import React from "react";
import PropTypes from "prop-types";

import {BrowserRouter, Switch, Route} from "react-router-dom";

import HelloWorld from "./HelloWorld";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => "Home!"} />
            <Route
              exact
              path="/"
              render={() => <HelloWorld greeting="Friend" />}
            />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
