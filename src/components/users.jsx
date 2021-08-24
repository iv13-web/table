import User from './user'

const tableHeaders = [
	'Имя',
	'Качества',
	'Профессия',
	'Встретился, раз',
	'Оценка',
	'Избранное'
]

export default function Users({users, ...rest}) {

	const {onDelete, onToggleBookmark} = rest

	return (
		<table className='highlight'>
			<thead>
			<tr>
				{tableHeaders.map(title => (
					<th key={title}>{title}</th>
				))}
			</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<User
						key={user._id}
						user={user}
						onDelete={onDelete}
						onToggleBookmark={() => onToggleBookmark(user._id)}
					/>
				))}
			</tbody>
		</table>
	)
}