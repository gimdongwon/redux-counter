import React, { Component } from "react";
import CounterListContainers from "../Containers/CounterListContainers";
import Buttons from "./Button";

import { connect } from "react-redux";
import { getRandomColor } from "../utils";
import * as actions from "../actions";
class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove} />
        <CounterListContainers />
      </div>
    );
  }
}

const mapToDispatch = dispatch => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: index => dispatch(actions.remove(index))
});

export default connect(
  null,
  mapToDispatch
)(App);
