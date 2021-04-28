import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Channel from '../components/Channel/Channel';
import { useAppContext } from '../context/AppContext';

const App: React.FC = () => {
	const { favoriteVideos, setFavoriteVideos } = useAppContext();
	useEffect(() => {
		const ls = localStorage;
		const favoriteVideosLS = JSON.parse(ls.getItem('favoriteVideos'));
		if (!favoriteVideosLS) {
			console.log('no favorite videos');
			ls.setItem('favoriteVideos', JSON.stringify([]));
		}
		setFavoriteVideos(JSON.parse(ls.getItem('favoriteVideos')));
		console.log('favorite videos are exist');
	}, []);
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
