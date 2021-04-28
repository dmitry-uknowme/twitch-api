import React, { useEffect } from 'react';
// import './App.css';
import Header from '../components/Header/Header';
import Channel from '../components/Channel/Channel';

//@ts-expect-error
const App: React.FC = ({ channel }) => {
	// console.log(channel);

	return (
		<div className='app'>
			<Header />
			<Channel />
		</div>
	);
};

export default App;
