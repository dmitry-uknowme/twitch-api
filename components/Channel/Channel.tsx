import React, { useState } from 'react';

import { channel, channel__info, channel__videos } from './Channel.module.sass';
import { useAppContext } from '../../context/AppContext';
import VideoItem from '../VideoItem/VideoItem';

const Channel = () => {
	//@ts-expect-error
	const { channelData, setChannelData, channelVideos, setChannelVideos } = useAppContext();

	const [likedVideos, setLikedVideos] = useState<object[]>([]);

	return (
		<main className={channel}>
			<div className={channel__info}>
				{channel ? (
					<>
						<img className='channel__logo' src={channel?.logo}></img>
						<h2>{channel?.name}</h2>
						<p>{channel?.bio}</p>
					</>
				) : (
					'Пользователь не найден'
				)}
			</div>
			<hr />
			<div className={channel__videos}>
				{channelVideos?.map((video: any, id: Number) => (
					<VideoItem key={video._id} video={video} parentStyle='channel' />
				))}
			</div>
		</main>
	);
};

export default Channel;
