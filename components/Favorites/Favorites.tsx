import React from 'react';
import { useAppContext } from '../../context/AppContext';
import VideoItem, { IVideo } from '../VideoItem/VideoItem';
//@ts-expect-error //need fix
import { favorites, favorites__info, favorites__videos } from './Favorites.module.sass';

const Favorites: React.FC = () => {
	const { favoriteVideos, setFavoriteVideos } = useAppContext();

	return (
		<main className={favorites}>
			<div className={favorites__info}>Избранное</div>
			<hr />
			<div className={favorites__videos}>
				{favoriteVideos?.map((video: IVideo, id: number) => (
					<VideoItem key={video._id} video={video} parent='favorites' id={id} />
				))}
			</div>
		</main>
	);
};

export default Favorites;
