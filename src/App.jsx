import Users from './pages/Users'
import Layout from './Layout/Layout'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Main from './pages/Main'
import Login from './pages/Login'
import User from './pages/User'

export default function App() {
	return (
		<HashRouter basename='/'>
			<Layout>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route path='/login' component={Login}/>
					<Route path='/users/:userId' component={User}/>
					<Route path='/users' component={Users}/>
				</Switch>
			</Layout>
		</HashRouter>
	)
}
