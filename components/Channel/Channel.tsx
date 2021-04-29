import React, { useState } from 'react';
//@ts-expect-error //need fix
import { channel, channel__info, channel__logo, channel__videos } from './Channel.module.sass';
import { useAppContext } from '../../context/AppContext';
import VideoItem, { IVideo } from '../VideoItem/VideoItem';

export interface IChannelData {
	name: string;
	logo: string;
	bio: string;
}

const Channel: React.FC = () => {
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
			<div className={channel__videos}>
				{channelVideos?.map((video: IVideo, id: number) => (
					<VideoItem key={video._id} video={video} parent='channel' id={id} />
				))}
			</div>
		</main>
	);
};

export default Channel;
