import React from "react";
import propTypes from "prop-types";
import "./Counter.css";

const Counter = ({
  number,
  color,
  index,
  onIncrement,
  onDecrement,
  onSetColor
}) => {
  return (
    <div
      className="Counter"
      onClick={() => onIncrement(index)}
      onContextMenu={e => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={() => onSetColor(index)}
      style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

Counter.propTypes = {
  index: propTypes.number,
  number: propTypes.number,
  color: propTypes.String,
  onIncrement: propTypes.func,
  onDecrement: propTypes.func,
  onSetColor: propTypes.func
};

Counter.defaultProps = {
  index: 0,
  number: 0,
  color: "black",
  onIncrement: () => console.log("onIncrement"),
  onDecrement: () => console.log("onDecrement"),
  onSetColor: () => console.log("onSetColor")
};

export default Counter;
