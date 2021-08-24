export default function Quality({color, name, _id}) {

	return (
			<span
				id={_id}
				style={{marginRight:'6px', fontWeight:'bold'}}
				className={`new badge ${color}`}
				data-badge-caption=""
			>
				{name}
			</span>
	)
}