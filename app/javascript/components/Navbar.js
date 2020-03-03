import React from "react";
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <>
      <Nav
        activeKey="/"
        onSelect={selectedKey => console.log(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link as={NavLink} to="/" eventKey="home">
            home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/hello" eventKey="hello">
            hello
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="algorithms" eventKey="algorithms">
            algorithms
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Navbar;
