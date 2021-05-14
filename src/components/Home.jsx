import { Box, Container, Heading } from 'theme-ui';

function Home() {
	return (
		<Box mt={5}>
			<Container p={3} bg="white" sx={{ width: [ '100%', '75%', '50%' ] }}>
				<Heading>Example</Heading>
			</Container>
		</Box>
	);
}

export default Home;
