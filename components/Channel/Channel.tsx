import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { likeVideo } from '../../reducers/channelReducer';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Channel.module.sass';

const Channel = () => {
	// const dispatch = useDispatch();
	//@ts-expect-error
	// const channelVideos = useSelector((state) => state.channel.videos);

	//@ts-expect-error
	// const channelData = useSelector((state) => state.channel.data);

	const [likedVideos, setLikedVideos] = useState<object[]>([]);

	return (
		<main className='channel'>
			<div className='channel__info'>
				{/* {channelData ? (
					<>
						<img className='channel__logo' src={channelData?.logo}></img>
						<h2>{channelData?.name}</h2>
						<p>{channelData?.bio}</p>
					</>
				) : (
					'Пользователь не найден'
				)} */}
			</div>
			<hr />
			<div className='channel__videos'></div>
		</main>
	);
};

export default Channel;

// {
// 	channelVideos?.map((video: any, id: Number) => (
// 		<>
// 			<a className='channel__videos-preview' key={video._id} href={video.url} target='_blank' style={{ background: `url(${video.preview.medium})` }}>
// 				<div className='channel__videos-overlay'></div>
// 				<div className='channel__videos-name'>{video.title}</div>
// 				<div className='channel__videos-views'>{video.views} просмотров</div>
// 				<div className='channel__videos-game'>{video.game}</div>
// 			</a>

// 			{video.liked === true ? (
// 				<>
// 					<FavoriteIcon className='channel__videos-like _liked' /* onClick={() => dispatch(likeVideo(id)) */></FavoriteIcon>
// 				</>
// 			) : (
// 				<FavoriteIcon className='channel__videos-like' /* onClick={() => dispatch(likeVideo(id)) */></FavoriteIcon>
// 			)}
// 		</>
// 	));
// }
