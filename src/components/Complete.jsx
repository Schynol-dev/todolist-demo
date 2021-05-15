import { Box, Container, Heading } from '@theme-ui/components';

function Complete(props) {
	return (
		<Box>
			{props.items.map((item) => {
				if (item.completed) {
					return (
						<Container key={item.id} mt={1} p={3} bg="white" sx={{ width: [ '100%', '75%', '50%' ] }}>
							<Heading>{item.title}</Heading>
						</Container>
					);
				}
			})}
		</Box>
	);
}

export default Complete;
