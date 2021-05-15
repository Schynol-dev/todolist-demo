import { Box, Container, Textarea, Label, Button, Grid } from 'theme-ui';

function Create() {
	return (
		<Box>
			<Container mt={1} p={3} sx={{ width: [ '100%', '75%', '50%' ] }}>
				<Label mb={2} sx={{ fontSize: 4 }}>
					New todo
				</Label>
				<Textarea rows={3} mb={2} sx={{ fontSize: 3 }} placeholder="Todo description" />
				<Grid columns={[ 2, 2, 2 ]}>
					<Button sx={{ cursor: 'pointer', maxWidth: '60%' }}>New todo</Button>
					<Label mb={2} sx={{ fontSize: 1, display: 'block', textAlign: 'right' }}>
						characters: 0
					</Label>
				</Grid>
			</Container>
		</Box>
	);
}

export default Create;
