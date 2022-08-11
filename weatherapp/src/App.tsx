import logo from "./logo.svg";
import "./App.scss";
import CurrentLocation from "./Weather";
import React, { Component } from "react";
type CounterState = {
  value: number;
};
class App extends React.Component {
  state: CounterState = {
    value: 0,
  };
  render() {
    return (
      <div>
        <CurrentLocation />
      </div>
    );
  }
}

export default App;
