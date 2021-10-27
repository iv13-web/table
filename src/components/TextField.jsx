import PropTypes from 'prop-types'
import {useState} from 'react'

export default function TextField({label, type, name, value, onChange, error}) {
	const [showPassword, setShowPassword] = useState(false)

	const toggleShowPassword = () => setShowPassword(prev => !prev)

	return (
		<div className='input-field'>
			<label htmlFor={name}>{label}</label>
			<input
				type={showPassword ? 'text' : type}
				name={name}
				id={name}
				onChange={onChange}
				value={value}
			/>
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<span
				className="helper-text"
				data-error="wrong"
				color='secondary'
				style={{color: 'red'}}
			>
				{error}
			</span>
				{type === 'password' &&
				<button className='btn-small btn-floating transparent'>
					<i
						className='material-icons'
						style={{
							cursor: 'pointer',
							color: !showPassword ? '#9e9e9e' : 'teal'
						}}
						onClick={toggleShowPassword}

					>
						remove_red_eye
					</i>
				</button>
				}
			</div>
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
