import PropTypes from 'prop-types'

export default function GroupList({items, valueProperty, contentProperty, onSelectItem, selectedItem, className}) {
  return (
    <ul className={`collection ${className}`}>
      {Object.keys(items).map(item => (
        <li
          key={items[item][valueProperty]}
          className={`collection-item ${items[item] === selectedItem ? 'active' : ''}`}
          onClick={() => onSelectItem(items[item])}
          style={{cursor: 'pointer'}}
        >
          {items[item][contentProperty]}
        </li>))}
    </ul>
  )
}

GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
}

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func,
  selectedItem: PropTypes.object,
  className: PropTypes.string
}