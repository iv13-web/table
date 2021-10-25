import Pagination from '../components/Pagination'
import {useState, useEffect} from 'react'
import {paginate} from '../utils/paginate'
import GroupList from '../components/GroupList'
import api from '../API'
import _ from 'lodash'
import SearchStatus from '../components/SearchStatus'
import UsersTable from '../components/UsersTable'
import Container from '../components/Container'
import {useParams} from 'react-router-dom'
import User from './User'

export default function Users() {
	const [users, setUsers] = useState()
	const [professions, setProfessions] = useState()
	const [currentPage, setCurrentPage] = useState(1)
	const [selectedProf, setSelectedProf] = useState()
	const [sortBy, setSortBy] = useState({path: 'name', order: 'asc'})
	const pageSize = 6

	useEffect(() => {
		api.users.fetchAll().then(data => setUsers(data))
	}, [])

	useEffect(() => {
		api.professions.fetchAll().then(data => setProfessions(data))
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
			</Container>
		)
	}
	return <Container><h4>loading...</h4></Container>
}