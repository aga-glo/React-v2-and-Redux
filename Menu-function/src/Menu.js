import React, { Component } from "react";
import "./Menu.css";


class Menu extends Component {
    render () {
        console.log("test Menu");
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                    <h2><a href="#">MAIN PAGE</a></h2>
                    <h2><a href="#">ABOUT US</a></h2>
                    <h2><a href="#">CONTACT</a></h2>
                    <h2><a href="#">SEARH</a></h2>
                </div>
        );
    }
}
export default Menu;