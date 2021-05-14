import { Box, Container, Heading } from 'theme-ui';

function Home(props) {

	return (
		<Box>
			<Container p={3} bg="white" sx={{ width: [ '100%', '75%', '50%' ] }}>
				<Heading>Example</Heading>
			</Container>
			{props.items.map((item) => {
				return (
					<Container p={3} bg="white" sx={{ width: [ '100%', '75%', '50%' ] }}>
						<Heading>{item.title}</Heading>
					</Container>
				);
			})}
		</Box>
	);
}

export default Home;
