import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Channel from './components/Channel/Channel';

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Channel />
		</div>
	);
};

export default App;
