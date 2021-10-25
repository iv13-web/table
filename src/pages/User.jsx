import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import api from '../API'
import _ from 'lodash'
import QualitiesList from '../components/QualitiesList'

export default function User() {
	const history = useHistory()
	const {userId} = useParams()
	const [userData, setUserData] = useState({})

	useEffect(() => {
		(async() => {
			const data = await api.users.getById(userId)
			data && setUserData(data)
		})()
	}, [userId])

	return (
		<div className='container'>
			{_.isEmpty(userData)
				? <h4>No user with current ID</h4>
				: <>
						<h4>{userData.name}</h4>
						<h5>Профессия: {userData.profession?.name}</h5>
						<QualitiesList qualities={userData.qualities}/>
						<h6>Успешных встреч: {userData.completedMeetings}</h6>
						<h5>Рейтинг: {userData.rate}</h5>
					</>
			}
			<button
				className='waves-effect waves-light btn-small'
				onClick={() => history.push('/users')}
			>
				Все пользователи
			</button>
		</div>
	)
}
