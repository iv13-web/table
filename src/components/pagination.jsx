import _ from 'lodash'
import PropTypes from 'prop-types'

export default function Pagination(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props
  const pageCount = Math.ceil(itemsCount / pageSize)
  const pages = _.range(1, pageCount + 1)

  if (pageCount === 1) return null

  return (
    <ul className="pagination" style={{ textAlign: 'center' }}>
      {pages.map((page) => {
        return (
          <li
            className={page === currentPage ? 'active' : 'waves-effect'}
            key={page}
            style={{ marginRight: 4 }}
          >
            <a onClick={() => onPageChange(page)}>{page}</a>
          </li>
        )
      })}
    </ul>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
}
