import React from "react";

import image from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={image} alt="logo" />
  </div>
);

export default logo;
