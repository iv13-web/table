import * as PropTypes from 'prop-types'

export default function TableHeader({onSort, selectedSort, columns}) {
	const sortHandler = (item) => {
		if (selectedSort.path === item) {
			return onSort({
				...selectedSort,
				order: selectedSort.order === 'asc' ? 'desc' : 'asc'
			})
		}
		onSort({path: item, order: 'asc'})
	}

	const showArrow = (selectedSort, path) => {
		if (selectedSort.path === path) {
			return selectedSort.order === 'asc'
				? <i className="material-icons" style={{verticalAlign: 'bottom'}}>arrow_drop_up</i>
				: <i className="material-icons" style={{verticalAlign: 'bottom'}}>arrow_drop_down</i>
		}
	}

  return (
		<thead>
		<tr>
			{Object.keys(columns).map(col => (
				<th
					style={{cursor: columns[col].path ? 'pointer' : 'default'}}
					key={col}
					onClick={columns[col].path ? () => sortHandler(columns[col].path) : null}
				>
					{columns[col].name}
					{showArrow(selectedSort, columns[col].path)}
				</th>
				))}
		</tr>
		</thead>
  )
}

TableHeader.propTypes = {
	onSort: PropTypes.func.isRequired,
	selectedSort: PropTypes.object.isRequired,
	columns: PropTypes.object.isRequired
}
