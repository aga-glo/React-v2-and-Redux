import React, {Component} from "react";
import MenuButton from "./MenuButton";
import Menu from './Menu.js';

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();
        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        console.log("test MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                     menuVisibility={this.state.visible} />
                <div>
                    <p>Some random info to make page look better. Please focus on blue circle button - this is show/hide menu.</p>
                    <ul>
                        <li>Car</li>
                        <li>Money</li>
                        <li>Dragon</li>
                        <li>Last</li>
                        <li>Ball</li>
                        <li>Orange</li>
                        <li>Step</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default MenuContainer;