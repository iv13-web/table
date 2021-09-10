import PropTypes from 'prop-types'
import Quality from './quality'
import Bookmark from './bookmark'

export default function User({ user, onDelete, onToggleBookmark }) {
  return (
    <tr key={user?._id}>
      <td>{user.name}</td>

      <td>
        {user.qualities.map((quality) => (
          <Quality
            key={quality._id}
            name={quality.name}
            color={quality.color}
            id={quality._id}
          />
        ))}
      </td>

      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} / 5</td>
      <Bookmark onClick={onToggleBookmark} status={user.saved} />
      <td>
        <button
          className="btn-small waves-effect red"
          onClick={() => onDelete(user._id)}
        >
          удалить
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  onToggleBookmark: PropTypes.func
}
