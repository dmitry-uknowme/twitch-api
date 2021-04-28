import { AppWrapper } from '../context/AppContext';
import '../styles/index.css';

function App({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default App;
