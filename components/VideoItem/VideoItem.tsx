import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { video__preview, video__overlay, video__name, video__views, video__game } from './VideoItem.module.sass';

const VideoItem = ({ video, parentStyle }) => {
	return (
		<>
			<a className={video__preview} href={video.url} target='_blank' style={{ background: `url(${video.preview.medium})` }}>
				<div className={video__overlay}></div>
				<div className={video__name}>{video.title}</div>
				<div className={video__views}>{video.views} просмотров</div>
				<div className={video__game}>{video.game}</div>
			</a>
			{video.liked === true ? (
				<>
					<FavoriteIcon className='channel__videos-like _liked' /* onClick={() => dispatch(likeVideo(id)) */></FavoriteIcon>
				</>
			) : (
				<FavoriteIcon className='channel__videos-like' /* onClick={() => dispatch(likeVideo(id)) */></FavoriteIcon>
			)}
		</>
	);
};

export default VideoItem;
