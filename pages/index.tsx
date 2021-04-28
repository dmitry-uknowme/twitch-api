import React, { useEffect } from 'react';
// import './App.css';
import Header from '../components/Header/Header';
import Channel from '../components/Channel/Channel';

//@ts-expect-error
const App: React.FC = ({ channel }) => {
	// console.log(channel);

	return (
		<div className='app'>
			//@ts-expect-error
			<Header state={{ channel }} />
			<Channel />
		</div>
	);
};

export const getStaticProps = async (context) => {
	// console.log('ctx', context);
	const res = await fetch('http://localhost:3000/api/channel/buster');
	const channel = await res.json();

	return {
		props: { channel },
	};
};

export default App;
