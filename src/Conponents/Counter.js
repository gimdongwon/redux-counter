import React from "react";
import propTypes from "prop-types";
import "./Counter.css";

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: propTypes.number,
  color: propTypes.String,
  onIncrement: propTypes.func,
  onDecrement: propTypes.func,
  onSetColor: propTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: "black",
  onIncrement: () => console.log("onIncrement"),
  onDecrement: () => console.log("onDecrement"),
  onSetColor: () => console.log("onSetColor")
};

export default Counter;
