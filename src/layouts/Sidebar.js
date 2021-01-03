import React, { Component } from "react";
import { faHome, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

class Sidebar extends Component {

    constructor(props){
        super(props);
        let pathname = window.location.pathname.split('/')[1];
        pathname = pathname.charAt(0).toUpperCase() + pathname.slice(1);
        this.state = { 
            active: pathname,
            tabs: [
                { page: "Dashboard", icon: faHome},
                { page: "Users", icon: faUsers},
                { page: "Setting", icon: faCog}
            ]
        };
        this.clickMenu = this.clickMenu.bind(this);
    }

    clickMenu(menuItem) { 
        this.setState({ active: menuItem });
    }

    renderMenu() {
        return (
            this.state.tabs.length > 0 &&
            this.state.tabs.map(v => (
                <Menu key={v.page} page={v.page} active={this.state.active} onClickMenu={this.clickMenu} icon={v.icon}/>
            ))
        );
    }

    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                <h6 className="mt-1">
                    <span>Company name</span>
                </h6>
                </div>
                <div className="list-group">
                    {this.renderMenu()}
                </div>
            </div>
        )
    }

}

export default Sidebar;