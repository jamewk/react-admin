import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; 

const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
            <h5 className="text-uppercase mt-1">
                <span>Web Admin</span>
            </h5>
            </div>
            <div className="list-group">
                <Link className="list-group-item list-group-item-action border-0" to="/dashboard"><FontAwesomeIcon icon={faHome} />  Dashboard</Link>
                <Link className="list-group-item list-group-item-action border-0" to="/users"><FontAwesomeIcon icon={faUser} />  Users</Link>
                <Link className="list-group-item list-group-item-action border-0" to="/Setting"><FontAwesomeIcon icon={faCog} />  Setting</Link>
            </div>
        </div>
    )
}

export default Sidebar;