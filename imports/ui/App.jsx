/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component, Fragment } from "react";
import Header from "./components/Header";

// App component - represents the whole app
export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    );
  }
}
