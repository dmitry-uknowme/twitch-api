import React from 'react';
import { useAppContext } from '../../context/AppContext';
import VideoItem from '../VideoItem/VideoItem';
import { favorites, favorites__videos } from './Favorites.module.sass';

const Favorites = () => {
	const { favoriteVideos, setFavoriteVideos } = useAppContext();

	return (
		<main className={favorites}>
			<div className='favorites__info'>Избранное</div>
			<hr />
			<div className={favorites__videos}>
				{favoriteVideos?.map((video: any, id: Number) => (
					<VideoItem key={video._id} video={video} id={id} />
				))}
			</div>
		</main>
	);
};

export default Favorites;
