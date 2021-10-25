import {useEffect, useState} from 'react'
import TextField from '../components/TextField'
import _ from 'lodash'
import {validator} from '../utils/validator'

export default function Login() {
	const [data, setData] = useState({
		email: '',
		password: ''
	})
	const [errors, setErrors] = useState()

	const handleChange = ({target}) => {
		setData(prevState => ({
			...prevState,
			[target.name]: target.value
		}))
	}

	const validatorConfig = {
		email: {
			isRequired: {
				message: 'Электронная почта обязательна для заполнения'
			}
		},
		password: {
			isRequired: {
				message: 'Пароль обязателен для заполнения'
			}
		}
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return _.isEmpty(errors)
	}

	useEffect(() => {
		validate()
	}, [data])

	const handleSubmit = e => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		console.log(data)
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col s6 offset-s3'>
					<form onSubmit={handleSubmit}>
						<TextField
							label='Email'
							name='email'
							value={data.email}
							type='email'
							onChange={handleChange}
							error={errors?.email}
						/>
						<TextField
							label='Password'
							name='password'
							value={data.password}
							type='password'
							onChange={handleChange}
							error={errors?.password}
						/>
						<button
							type='submit'
							className='waves-effect btn btn-small'
						>
							Подтвердить
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
