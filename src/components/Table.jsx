import TableHeader from './TableHeader'
import TableBody from './TableBody'
import * as PropTypes from 'prop-types'

export default function Table({onSort, selectedSort, columns, data, children}) {
  return (
		<table className="highlight col s10">
			{children || (
				<>
					<TableHeader {...{onSort, selectedSort, columns}}/>
					<TableBody columns={columns} data={data}/>
				</>
			)}
		</table>
	)
}
Table.propTypes = {
	onSort: PropTypes.func,
	selectedSort: PropTypes.object,
	columns: PropTypes.object,
	data: PropTypes.array,
	children: PropTypes.array
}