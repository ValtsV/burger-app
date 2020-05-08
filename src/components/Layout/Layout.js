import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSidedrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState((previousState) => {
      return {
        showSidedrawer: !previousState.showSidedrawer,
      };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar click={this.sideDrawerClosedHandler} />
        <SideDrawer
          open={this.state.showSidedrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
