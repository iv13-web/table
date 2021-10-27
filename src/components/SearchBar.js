import PropTypes from 'prop-types'

export default function SearchBar({searchTemp, onChange}) {
  return (
    <div className='input-field col s10' style={{padding: 0}}>
      <input
        type="text"
        placeholder='Поиск пользователей'
        value={searchTemp}
        onChange={onChange}
      />
    </div>
  )
}

SearchBar.propTypes = {
  searchTemp: PropTypes.string,
  onChange: PropTypes.func
}