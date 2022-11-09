import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { customTheme } from '../../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
