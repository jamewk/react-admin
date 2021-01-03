import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"; 

class Menu extends Component {
    render() {
        const active = { fontWeight: "600", backgroundColor: "#eff0f1", color: "#007bff", textDecoration: 'inherit'};
        return (
            <Link className="p-2 list-group-item-custom" style={this.props.active === this.props.page ? active : {color: 'inherit', textDecoration: 'inherit'}}  to={"/" + this.props.page.toLowerCase()}
                onClick={this.props.onClickMenu.bind(this, this.props.page)} >
                <FontAwesomeIcon icon={this.props.icon} /> 
                <span className="pl-3">{this.props.page}</span>
            </Link>
        )
    }

}

export default Menu;