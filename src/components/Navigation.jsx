import { Flex, Text } from '@theme-ui/components';
import { Link } from 'react-router-dom';

function Navigation(props) {
	return (
		<Flex
			sx={{
				justifyContent: 'center',
				p: 4
			}}
		>
			{props.links.map((link) => {
				return (
					<Text
						sx={{
							p: '1rem',
							a: {
								textDecoration: 'none',
								color: 'text',
								fontSize: 3,
								fontWeight: 'bold',
								'&:hover': { color: '#000', borderBottom: 'solid 3px #e84a5f' }
							}
						}}
					>
						<Link to={link.to}>{link.text}</Link>
					</Text>
				);
			})}
		</Flex>
	);
}

export default Navigation;
