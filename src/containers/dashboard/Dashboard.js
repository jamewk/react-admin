import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Dashboard extends Component {
	render() {
		return (
			<div className="mt-2">
                <span><FontAwesomeIcon icon={faHome} /> Dashboard</span>
			</div>
		);
	}
}

export default Dashboard;
