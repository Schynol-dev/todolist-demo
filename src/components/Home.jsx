import { Box, Container, Heading } from 'theme-ui';
import Item from './Item';

function Home(props) {
	return (
		<Box>
			<Container p={3}>
				{props.items.map((item) => {
					return <Item key={item.id} todo={item} />;
				})}
			</Container>
		</Box>
	);
}

export default Home;
