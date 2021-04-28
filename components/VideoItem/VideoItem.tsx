import React from 'react';
import cn from 'classnames';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { video__preview, video__overlay, video__name, video__views, video__game, video__like, _liked } from './VideoItem.module.sass';
import { useAppContext } from '../../context/AppContext';

const VideoItem = ({ video, id, parentStyle }) => {
	const { channelVideos, setChannelVideos } = useAppContext();
	const likeVideoHanler = (id) => {
		setChannelVideos((state) => [
			...state.slice(0, id),
			Object.assign(state[id], {
				liked: !state[id].liked,
			}),
			...state.slice(id + 1),
		]);
	};
	return (
		<>
			<a className={video__preview} href={video.url} target='_blank' style={{ background: `url(${video.preview.medium})` }}>
				<div className={video__overlay}></div>
				<div className={video__name}>{video.title}</div>
				<div className={video__views}>{video.views} просмотров</div>
				<div className={video__game}>{video.game}</div>
			</a>
			<FavoriteIcon className={cn(video__like, { [_liked]: video.liked })} onClick={() => likeVideoHanler(id)}></FavoriteIcon>
		</>
	);
};

export default VideoItem;
