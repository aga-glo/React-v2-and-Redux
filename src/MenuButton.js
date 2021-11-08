import React, {PureComponent} from "react";
import './MenuButton.css';

class MenuButton extends PureComponent {

     render() {
        console.log("test MenuButton");
    return (
        <button id="roundButton"
                onMouseDown={this.props.handleMouseDown}></button>
    
        );
    }
}
export default MenuButton;