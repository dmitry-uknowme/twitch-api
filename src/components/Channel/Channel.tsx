import React from 'react';
import { useSelector } from 'react-redux';
import './Channel.sass';
const Channel = () => {
	//@ts-expect-error
	const channelVideos = useSelector((state) => state.channel.videos);
	//@ts-expect-error
	const channelData = useSelector((state) => state.channel.data);

	return (
		<main className='channel'>
			<div className='channel__info'>
				{channelData ? (
					<>
						<img className='channel__logo' src={channelData?.logo}></img>
						<h2>{channelData?.name}</h2>
						<p>{channelData?.bio}</p>
					</>
				) : (
					'Пользователь не найден'
				)}
			</div>
			<hr />
			<div className='channel__videos'>
				{channelVideos.videos?.map((video: any) => (
					<a className='channel__videos-preview' href={video.url} style={{ background: `url(${video.preview.medium})` }}>
						<div className='channel__videos-overlay'></div>
						<div className='channel__videos-name'>{video.title}</div>
						<div className='channel__videos-views'>{video.views} просмотров</div>
						<div className='channel__videos-game'>{video.game}</div>
					</a>
				))}
			</div>
		</main>
	);
};

export default Channel;
