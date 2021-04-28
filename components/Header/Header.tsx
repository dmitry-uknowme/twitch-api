import React, { useEffect, useState, useContext } from 'react';

import styles from './Header.module.sass';
const headerStyle = styles.header;
const headerContainerStyle = styles.header__container;

import './Header.module.sass';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';
//@ts-expect-error
const Header: React.FC = ({ state }) => {
	const { channelData, setChannelData, channelVideos, setChannelVideos } = useAppContext();

	const [userInput, setUserInput] = useState<string>();
	const [favoriteVideosCount, setFavoriteVideosCount] = useState<any>(0);

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInput(value);
	};

	const searchUsers = async () => {
		await axios.get(`http://localhost:3000/api/channel/${userInput}`).then((response) => {
			const user = response.data;

			setChannelData(user);
			axios.get(`http://localhost:3000/api/videos/${user?._id}`).then((response) => {
				const videos = response.data.videos;

				setChannelVideos(videos);
			});
		});
	};

	// const searchUsers = async () => {
	// 	await axios
	// 		.get(`https://api.twitch.tv/kraken/users?login=${userInput}`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
	// 		.then((response) => {
	// 			const user = response.data.users[0];
	// 			dispatch(setChannel(user));
	// 			axios
	// 				.get(`https://api.twitch.tv/kraken/channels/${user?._id}/videos?limit=100`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
	// 				.then((res) => dispatch(setChannelVideos(res.data.videos)));
	// 		});
	// };

	// useEffect(() => {
	// 	if (channelVideos) {
	// 		setFavoriteVideosCount(channelVideos.filter((video: any) => video.liked).length);
	// 	}
	// }, [channelVideos]);

	return (
		<header className={headerStyle}>
			<div className={headerContainerStyle}>
				<div className='header__search'>
					<label htmlFor='header__search-input' className='header__search-label'>
						Введите название канала
					</label>
					<input type='text' className='header__search-input' onChange={inputHandler} />
					<button className='header__search-btn' onClick={searchUsers}>
						Найти
					</button>
				</div>
				<div className='header__favorite'>
					Избранное <span className='header__favorite-count'>{favoriteVideosCount}</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
