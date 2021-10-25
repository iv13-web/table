import PropTypes from 'prop-types'

export default function TextField({label, type, name, value, onChange, error}) {
	return (
		<div className='section'>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				id={name}
				onChange={onChange}
				value={value}
			/>
			<span
				className="helper-text"
				data-error="wrong"
				color='secondary'
				style={{color: 'red'}}
			>
				{error}
			</span>
		</div>
	)
}

TextField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string
}
