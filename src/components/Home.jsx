import { Box, Container, Heading } from 'theme-ui';

function Home(props) {
	return (
		<Box>
			<Container p={3}>
				{props.items.map((item) => {
						return (
							<Heading key={item.id} mb={2} p={2} bg="white">
								{item.title}
							</Heading>
						);
				})}
			</Container>
		</Box>
	);
}

export default Home;
