import * as PropTypes from 'prop-types'
import Bookmark from './Bookmark'
import QualitiesList from './QualitiesList'
import Table from './Table'
import {Link} from 'react-router-dom'

export default function UsersTable({users, onSort, selectedSort, onToggleBookmark, onDelete}) {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => (
        <Link to={`/users/${user._id}`}>
          {user.name}
        </Link>
      )
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities}/>
    },
    profession: {path: 'profession.name', name: 'Профессия'},
    completedMeetings: {path: 'completedMeetings', name: 'Встретился, раз'},
    rate: {path: 'rate', name: 'Оценка'},
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <Bookmark
          status={user.bookmark}
          onToggleBookmark={() => onToggleBookmark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          className="btn-small waves-effect red"
          onClick={() => onDelete(user._id)}
        >
          удалить
        </button>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func,
  currentSort: PropTypes.object,
  selectedSort: PropTypes.object,
  onToggleBookmark: PropTypes.func,
  onDelete: PropTypes.func
}