import Users from './components/users'
import Layout from './Layout/Layout'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './components/main'
import Login from './components/login'
import User from './components/user'

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route path='/login' component={Login}/>
					<Route path='/users/:userId?' component={Users}/>
				</Switch>
			</Layout>
		</BrowserRouter>
	)
}
