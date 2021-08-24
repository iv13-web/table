export default function Bookmark({status, ...rest}) {

	const {onClick} = rest

	return (
	 <td>
		 <button
			 className='btn-small'
			 onClick={onClick}
		 >
			 <i className="material-icons">
				 {status ? 'bookmark' : 'bookmark_border'}
			 </i>
		 </button>
	 </td>
	)
}