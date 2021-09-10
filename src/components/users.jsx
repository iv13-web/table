import PropTypes from 'prop-types'
import User from './user'
import Pagination from './pagination'
import { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import GroupList from './groupList'
import api from '../API/index'
import SearchStatus from './searchStatus'

const tableHeaders = [
  'Имя',
  'Качества',
  'Профессия',
  'Встретился, раз',
  'Оценка',
  'Избранное'
]

export default function Users({ users, ...rest }) {
  const [professions, setProfessions] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const { onDelete, onToggleBookmark } = rest
  const [selectedProf, setSelectedProf] = useState()
  const pageSize = 4
  const pageChangeHandler = (pageNum) => setCurrentPage(pageNum)

  const filteredUsers = selectedProf
    ? users.filter(user => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
    : users

  const count = filteredUsers.length

  const usersCropped = paginate(filteredUsers, currentPage, pageSize)

  const selectItemHandler = item => setSelectedProf(item)

  const clearFilter = () => setSelectedProf()

  useEffect(() => {
    api.professions.fetchAll().then(data => setProfessions(data))
    // .then(data => console.log(data))
    // api.professions.fetchAll().then(data => {
    //   return setProfessions(Object.assign(data, {allProfessions: {name: 'Все професии'}}))
    // })
  }, [])

  return (
    <>
      <SearchStatus length={count} />
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
        {count && (
          <table className="highlight col s10">
            <thead>
              <tr>
                {tableHeaders.map((title) => (
                  <th key={title}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {usersCropped.map((user) => (
                <User
                  key={user._id}
                  user={user}
                  onDelete={onDelete}
                  onToggleBookmark={() => onToggleBookmark(user._id)}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={pageChangeHandler}
        currentPage={currentPage}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}
