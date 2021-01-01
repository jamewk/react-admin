import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./layouts/Sidebar";
import Main from "./containers/Main";
import $ from 'jquery'; 

class App extends Component {

  componentDidMount(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

	render() {
    return (
      <div >
        <div className="d-flex" id="wrapper">
          <Sidebar />
  
          <div id="page-content-wrapper">
  
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
              <button className="btn btn-primary" id="menu-toggle">
                <FontAwesomeIcon icon={faBars} />   
              </button>
            </nav>
  
            <div className="container-fluid">
              <Main />
            </div>
          </div>
  
        </div>
      </div>
    );
	}
}

export default App;
