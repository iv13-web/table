export default function Container({children}) {
	return (
		<div style={{
			maxWidth:1280,
			padding: '0 20px',
			margin:'20px auto'
		}}>
			{children}
		</div>
	)
}