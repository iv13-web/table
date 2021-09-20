import * as PropTypes from 'prop-types'
import TableHeader from './tableHeader'
import TableBody from './tableBody'
import Bookmark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'

export default function UsersTable({users, onSort, selectedSort, onToggleBookmark, onDelete}) {
  const columns = {
    name: {path: 'name', name: 'Имя'},
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
    >

    </Table>
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