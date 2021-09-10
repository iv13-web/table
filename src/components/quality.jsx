import PropTypes from 'prop-types'

export default function Quality({ color, name, _id }) {
  return (
    <span
      id={_id}
      style={{ marginRight: '6px', fontWeight: 'bold' }}
      className={`new badge ${color}`}
      data-badge-caption=""
    >
      {name}
    </span>
  )
}

Quality.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  _id: PropTypes.string
}
