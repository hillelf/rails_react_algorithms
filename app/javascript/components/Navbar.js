import React from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/algorithms">algorithms</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
