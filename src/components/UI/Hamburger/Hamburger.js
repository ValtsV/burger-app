import React from "react";

import classes from "./Hamburger.module.css";

const hamburger = (props) => {
  let className = classes.Hamburger + " " + classes.Hamburgerspin;
  return (
    <button onClick={props.click} className={className}>
      <span className={classes.Hamburgerbox}>
        <span className={classes.Hamburgerinner}></span>
      </span>
    </button>
  );
};

export default hamburger;
