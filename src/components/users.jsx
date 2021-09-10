import PropTypes from 'prop-types'
import User from './user'
import Pagination from './pagination'
import { useState } from 'react'
import { paginate } from '../utils/paginate'

const tableHeaders = [
  'Имя',
  'Качества',
  'Профессия',
  'Встретился, раз',
  'Оценка',
  'Избранное'
]

export default function Users({ users, ...rest }) {
  const [currentPage, setCurrentPage] = useState(1)
  const { onDelete, onToggleBookmark } = rest
  const count = users.length
  const pageSize = 4
  const pageChangeHandler = (pageNum) => setCurrentPage(pageNum)
  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
      {count && (
        <table className="highlight">
          <thead>
            <tr>
              {tableHeaders.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
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
