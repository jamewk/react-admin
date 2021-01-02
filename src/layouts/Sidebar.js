import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 

class Sidebar extends Component {

    constructor(props){
        super(props);
        this.state = {active: 'dashboard'};
    }

    _handleClick(menuItem) { 
        this.setState({ active: menuItem });
    }

    render() {
        const active= { fontWeight: "600", backgroundColor: "#f6f6f6", color: "#007bff" };
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">
                <h6 className="mt-1">
                    <span>Company name</span>
                </h6>
                </div>
                <div className="list-group">
                    <Link className="list-group-item list-group-item-action border-bottom-0" to="/dashboard"
                        style={this.state.active === "dashboard" ? active : {}} 
                        onClick={this._handleClick.bind(this, 'dashboard')}
                        ><FontAwesomeIcon icon={faHome} />  Dashboard
                    </Link>
                    <Link className="list-group-item list-group-item-action border-bottom-0" to="/users"
                        style={this.state.active === "users" ? active : {}} 
                        onClick={this._handleClick.bind(this, 'users')}>
                        <FontAwesomeIcon icon={faUsers} />  Users
                    </Link>
                    <Link className="list-group-item list-group-item-action border-bottom-0" to="/setting"
                         style={this.state.active === "setting" ? active : {}} 
                         onClick={this._handleClick.bind(this, 'setting')}>
                        <FontAwesomeIcon icon={faCog} />  Setting
                    </Link>
                </div>
            </div>
        )
    }

}

export default Sidebar;