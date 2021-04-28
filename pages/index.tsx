import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Channel from '../components/Channel/Channel';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Head>
				<title>Twitch-search</title>t
			</Head>
			<Header />
			<Channel />
		</div>
	);
};

export default App;
