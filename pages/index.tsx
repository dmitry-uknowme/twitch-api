import React, { useEffect } from 'react';
// import './App.css';
import Header from '../components/Header/Header';
import Channel from '../components/Channel/Channel';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Channel />
		</div>
	);
};

export default App;
