import React, { useContext } from 'react';
import Context from '../Context';

const ChannelsList = () => {
	//@ts-expect-error
	const { foundChannels } = useContext(Context);
	console.log('channel', foundChannels);

	return <main className='channels-list'></main>;
};

export default ChannelsList;
