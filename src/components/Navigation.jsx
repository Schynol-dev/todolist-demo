/** @jsxImportSource theme-ui */
import { Flex, Button } from 'theme-ui';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<div
			sx={{
				textAlign: 'center',
				pt: '2rem'
			}}
		>
			<Link to="/" sx={{ p: '1rem' }}>
				Home
			</Link>
			<Link to="/done" sx={{ p: '1rem' }}>
				Done Tasks
			</Link>
			<Link to="/delete" sx={{ p: '1rem' }}>
				Deleted Tasks
			</Link>
		</div>
	);
}

export default Navigation;
