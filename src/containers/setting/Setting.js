import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from "@fortawesome/free-solid-svg-icons";

class Setting extends Component {
	render() {
		return (
			<div className="mt-2">
                <span><FontAwesomeIcon icon={faCog} /> Setting</span>
			</div>
		);
	}
}

export default Setting;
