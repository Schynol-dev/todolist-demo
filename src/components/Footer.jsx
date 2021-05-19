import { Box, Text } from '@theme-ui/components';

function Footer() {
	return (
		<Box mt={6} mb={5} sx={{ textAlign: 'center' }}>
			<Text>Copyright © {new Date().getFullYear()} Kamil Szczepanski</Text>
		</Box>
	);
}

export default Footer;
