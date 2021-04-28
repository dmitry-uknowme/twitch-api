import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { header, header__container, header__search, header__searchInput, header__searchLabel, header__searchBtn, header__favorite, header__favoriteIcon, _active } from './Header.module.sass';
import cn from 'classnames';

import SearchIcon from '@material-ui/icons/Search';

const Header: React.FC = () => {
	const { channelData, setChannelData, channelVideos, setChannelVideos, favoriteVideos } = useAppContext();

	const [userInput, setUserInput] = useState<string>('');
	const [favoriteVideosCount, setFavoriteVideosCount] = useState<any>(0);

	const isInputEmpty: boolean = userInput.trim() === '';

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInput(value);
	};

	const searchUser = async () => {
		console.log('click');
		await axios.get(`http://localhost:3000/api/channel/${userInput}`).then((response) => {
			const user = response.data;

			setChannelData(user);
			axios.get(`http://localhost:3000/api/videos/${user?._id}`).then((response) => {
				const videos = response.data.videos;

				setChannelVideos(videos);
			});
		});
	};

	return (
		<header className={header}>
			<div className={header__container}>
				<div className={header__search}>
					<label htmlFor='header__search-input' className={header__searchLabel}>
						Введите название канала
					</label>
					<input type='text' className={header__searchInput} placeholder='Поиск' onChange={inputHandler} />

					<SearchIcon className={cn(header__searchBtn, { [_active]: !isInputEmpty })} disabled={!isInputEmpty} onClick={searchUser}></SearchIcon>
				</div>
				<div className={header__favorite}>
					<FavoriteIcon className={header__favoriteIcon}></FavoriteIcon> Избранное <span className='header__favorite-count'>{favoriteVideos.length}</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
