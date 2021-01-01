import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

class UserList extends Component {
	render() {
		return (
			<div className="mt-2">
                <span><FontAwesomeIcon icon={faUser} /> Users</span>
			</div>
		);
	}
}

export default UserList;
