import PropTypes from 'prop-types'

const style = {
  marginRight: '6px',
  fontWeight: 'bold',
  float: 'inherit',
  marginLeft: 0
}

export default function Quality({color = 'teal', name, _id}) {
  return (
    <span
      id={_id}
      style={style}
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
