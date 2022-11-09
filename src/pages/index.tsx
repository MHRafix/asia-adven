import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ButtonC from '../customElements/ButtonC';

const Home: NextPage = () => {
	return (
		<Box>
			<ButtonC>Hello</ButtonC>
		</Box>
	);
};

export default Home;
