import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'

export default function Layout({children}) {
	return (
		<>
			<Navigation/>
			{children}
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.object
}
