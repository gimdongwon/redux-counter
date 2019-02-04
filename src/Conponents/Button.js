import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ onCreate, onRemove }) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>
        add
      </div>
      <div className="btn remove" onClick={onRemove}>
        remove
      </div>
    </div>
  );
};

Button.propTypes = {
  onCreate: PropTypes.func,
  onRemove: PropTypes.func
};
Button.defaultProps = {
  onCreate: console.warn("onCreate"),
  onRemove: console.warn("onRemove")
};

export default Button;
