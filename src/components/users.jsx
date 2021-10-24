import Pagination from './pagination'
import {useState, useEffect} from 'react'
import {paginate} from '../utils/paginate'
import GroupList from './groupList'
import api from '../API/index'
import _ from 'lodash'
import SearchStatus from './searchStatus'
import UsersTable from './usersTable'
import Container from './container'
import {useParams} from 'react-router-dom'
import User from './user'

export default function Users() {
	const [users, setUsers] = useState()
	const [professions, setProfessions] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedProf, setSelectedProf] = useState()
	const [sortBy, setSortBy] = useState({path: 'name', order: 'asc'})
	const pageSize = 6
	const {userId} = useParams()

	useEffect(() => {
		api.users.fetchAll().then(data => setUsers(data))
	}, [])

	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
		// .then(data => console.log(data))
		// api.professions.fetchAll().then(data => {
		//   return setProfessions(Object.assign(data, {allProfessions: {name: 'Все професии'}}))
		// })
	}, [])

	const deleteHandler = (userId) => {
		setUsers(users.filter((user) => user._id !== userId))
	}

	const toggleBookMarkHandler = userId => {
		const selected = users.findIndex(user => user._id === userId)
		const updatedUsers = [...users]
		updatedUsers[selected].bookmark = !updatedUsers[selected].bookmark
		setUsers(updatedUsers)
	}

	const pageChangeHandler = (pageNum) => setCurrentPage(pageNum)

	const sortHandler = (item) => setSortBy(item)

	if (users) {
		const filteredUsers = selectedProf
			? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
			: users

		const count = filteredUsers.length
		const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
		const usersCropped = paginate(sortedUsers, currentPage, pageSize)

		const selectItemHandler = item => setSelectedProf(item)

		const clearFilter = () => setSelectedProf()

		return (
			<Container>
					{userId
						? <User users={users} professions={professions}/>
						: <>
							<SearchStatus length={count}/>
							<div className='row'>
								{professions && (
									<div className='col s2' style={{paddingLeft: 0}}>
										<GroupList
											items={professions}
											selectedItem={selectedProf}
											onSelectItem={selectItemHandler}
										/>
										<button className='btn btn-small waves-effect' onClick={clearFilter}>Очистить</button>
									</div>
								)}
								{count &&
								<UsersTable
									users={usersCropped}
									onSort={sortHandler}
									selectedSort={sortBy}
									onDelete={deleteHandler}
									onToggleBookmark={toggleBookMarkHandler}
								/>
								}
							</div>
							<Pagination
								itemsCount={count}
								pageSize={pageSize}
								onPageChange={pageChangeHandler}
								currentPage={currentPage}
							/>
						</>
					}
			</Container>
		)
	}
	return <div className='container'><h3>Loading...</h3></div>
}
