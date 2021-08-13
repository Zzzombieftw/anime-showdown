import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import * as authService from '../../services/authService'

class App extends Component {
	state = {
		user: authService.getUser(),
		userProfile: null
	}

	handleLogout = () => {
		authService.logout()
		this.setState({ user: null, userProfile: null })
		this.props.history.push('/')
	}

	handleSignupOrLogin = async () => {
		// this.setState({ user: authService.getUser(), userProfile: await profileAPI.getUserProfile() })
	}

	async componentDidMount() {
		// if (!this.state.userProfile){
		// 	const userProfile = await profileAPI.getUserProfile()
		// 	this.setState({ userProfile })
		// }
	}

	render() {
		return (
			<>
				<NavBar user={this.state.user} />
				<Route exact path='/'>
          <Landing user={this.state.user} />
        </Route>
				<Route exact path='/signup'>
          <Signup history={this.props.history}/>
        </Route>
				<Route exact path='/login'>
          <Login history={this.props.history}/>
        </Route>
			</>
		)
	}
}

export default App
