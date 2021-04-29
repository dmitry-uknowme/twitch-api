import React, { useState } from 'react';

import { channel, channel__info, channel__logo, channel__videos } from './Channel.module.sass';
import { useAppContext } from '../../context/AppContext';
import VideoItem from '../VideoItem/VideoItem';

const Channel = () => {
	//@ts-expect-error
	const { channelData, setChannelData, channelVideos, setChannelVideos } = useAppContext();

	return (
		<main className={channel}>
			<div className={channel__info}>
				{channelData?.name ? (
					<>
						<img className={channel__logo} src={channelData?.logo}></img>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<h2>{channelData?.name}</h2>
							<p>{channelData?.bio}</p>
						</div>
					</>
				) : (
					'Введите запрос'
				)}
			</div>
			<hr />
			<div className={channel__videos}>
				{channelVideos?.map((video: any, id: Number) => (
					<VideoItem key={video._id} video={video} parent='channel' id={id} />
				))}
			</div>
		</main>
	);
};

export default Channel;
