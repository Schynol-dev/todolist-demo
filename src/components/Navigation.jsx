/** @jsxImportSource theme-ui */
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<div
			sx={{
				textAlign: 'center',
				p: 4
			}}
		>
			<Link to="/" sx={{ p: '1rem' }}>
				Home
			</Link>
			<Link to="/create" sx={{ p: '1rem' }}>
				New Todo
			</Link>
		</div>
	);
}

export default Navigation;
