import { AppWrapper } from '../context/AppContext';

function Application({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default Application;
