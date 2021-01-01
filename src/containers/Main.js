import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Setting from "./setting/Setting";
import UserList from "./users/UserList";
import NotFound from "./error/NotFound";

class Main extends Component {
	renderRouter() {
		return (
			<Switch>
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
				<Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/setting" component={Setting} />

				<Route component={ NotFound } />
			</Switch>
		);
	}

	render() {
		return <div>{this.renderRouter()}</div>;
	}
}

export default Main;
