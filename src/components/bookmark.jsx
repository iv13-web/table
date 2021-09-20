import PropTypes from 'prop-types'

export default function Bookmark({onToggleBookmark, status}) {
  return (
    <button className="btn-small" onClick={onToggleBookmark}>
      <i className="material-icons">
        {status ? 'bookmark' : 'bookmark_border'}
      </i>
    </button>
  )
}

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
  onToggleBookmark: PropTypes.func.isRequired
}
