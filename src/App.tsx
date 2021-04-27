import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Channel from './components/Channel/Channel';

const App: React.FC = () => {
	useEffect(() => {
		//@ts-expect-error
		const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
		if (favoriteVideos) {
		}
	}, []);

	return (
		<div className='app'>
			<Header />
			<Channel />
		</div>
	);
};

export default App;
