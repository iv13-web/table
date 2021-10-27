import {useEffect, useState} from 'react'
import TextField from '../components/TextField'
import _ from 'lodash'
import {validator} from '../utils/validator'

export default function Login() {
	const [errors, setErrors] = useState()
	const [data, setData] = useState({
		email: '',
		password: ''
	})

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
			},
			isEmail: {
				message: 'Электронная почта введена некорректно'
			}
		},
		password: {
			isRequired: {
				message: 'Пароль обязателен для заполнения'
			},
			isCapitalSymbol: {
				message: 'Пароль должен содержать как минимум 1 заглавную букву'
			},
			hasDigit: {
				message: 'Пароль должен содержать как минимум 1 цифру'
			},
			minLength: {
				message: 'Пароль должен состоять минимум за 4 символов',
				value: 4
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

	const isValid = _.isEmpty(errors)

	const handleSubmit = e => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
		console.log(data)
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col m6 offset-m3 s12'>
					<form onSubmit={handleSubmit} style={{
						marginTop: '20%',
						padding: '2rem 4rem 3rem',
						boxShadow: '0 0 16px 0 rgba(34, 60, 80, 0.2)',
						borderRadius: '8px'
					}}>
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
							disabled={!isValid}
						>
							Подтвердить
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
