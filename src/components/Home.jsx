import { Box, Container } from 'theme-ui';
import Item from './Item';

function Home(props) {
	return (
		<Box>
			<Container mt={3}>
				{props.items.map((item) => {
					return <Item key={item.id} todo={item} />;
				})}
			</Container>
		</Box>
	);
}

export default Home;
