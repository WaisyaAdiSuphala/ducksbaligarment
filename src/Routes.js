import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './dashboard/Dashboard';
import Dash from './dashboard/pages/Dash';

export default class Routes extends Component<{}> {

	render() {
		return(
			<Router>
				<Stack key="root" home={true}>
					<Scene key="login" component={Login} title="Login" hideNavBar={true}/>
					<Scene key="signup" component={Signup} title="Register" hideNavBar={true}/>
					<Scene key="dashboard" component={Dashboard} title="Home" hideNavBar={true}/>
					<Scene key="dash" component={Dash} title="Home1" hideNavBar={true}/>
				</Stack>
			</Router>
		)
	}
}