/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <Content />
      </Fragment>
    );
  }
}
