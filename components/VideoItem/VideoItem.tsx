import React from 'react';
import { useAppContext } from '../../context/AppContext';
import cn from 'classnames';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { video__preview, video__overlay, video__name, video__views, video__game, video__like, video__play, _liked } from './VideoItem.module.sass';

const VideoItem = ({ video, id, parent }) => {
	const { channelVideos, setChannelVideos, favoriteVideos, setFavoriteVideos } = useAppContext();
	// console.log(favoriteVideos);
	const likeVideoHanler = async (id, parent) => {
		const ls = localStorage;
		let isLiked;
		if (parent === 'favorites') {
			isLiked = favoriteVideos[id].liked;
			if (!isLiked) {
				await setFavoriteVideos((state) => {
					const newState = [...state, favoriteVideos[id]];
					ls.setItem('favoriteVideos', JSON.stringify(newState));
					return newState;
				});
			} else {
				await setFavoriteVideos((state) => {
					const newState = state.filter((vid) => vid !== favoriteVideos[id]);
					ls.setItem('favoriteVideos', JSON.stringify(newState));
					return newState;
				});
			}
			await setChannelVideos((state) => {
				const currId = state.findIndex((vid) => vid === favoriteVideos[id]);

				return [
					...state.slice(0, currId),
					Object.assign(state[currId], {
						liked: !state[currId].liked,
					}),
					...state.slice(currId + 1),
				];
			});
		} else if (parent === 'channel') {
			isLiked = channelVideos[id].liked;
			await setChannelVideos((state) => [
				...state.slice(0, id),
				Object.assign(state[id], {
					liked: !state[id].liked,
				}),
				...state.slice(id + 1),
			]);
			if (!isLiked) {
				await setFavoriteVideos((state) => {
					const newState = [...state, channelVideos[id]];
					ls.setItem('favoriteVideos', JSON.stringify(newState));
					return newState;
				});
			} else {
				await setFavoriteVideos((state) => {
					const newState = state.filter((vid) => vid !== channelVideos[id]);
					ls.setItem('favoriteVideos', JSON.stringify(newState));
					return newState;
				});
			}
		}
	};

	const likeBtnClass = (video) => cn(video__like, { [_liked]: video.liked });

	return (
		<>
			<a className={video__preview} href={video.url} target='_blank' style={{ background: `url(${video.preview.medium})` }}>
				<div className={video__overlay}></div>
				<div className={video__name}>{video.title}</div>
				<div className={video__views}>{video.views} просмотров</div>
				<div className={video__game}>{video.game}</div>
				<PlayArrowIcon className={video__play}></PlayArrowIcon>
			</a>
			<FavoriteIcon className={likeBtnClass(video)} onClick={() => likeVideoHanler(id, parent)}></FavoriteIcon>
		</>
	);
};

export default VideoItem;
