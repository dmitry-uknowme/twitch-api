import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';
import TabBarNav from '../TabBar/TabBarNav';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import {
	header,
	header__container,
	header__search,
	header__searchInput,
	header__searchLabel,
	header__searchBtn,
	header__favorite,
	header__favoriteIcon,
	header__favoriteCount,
	_active,
} from './Header.module.sass';
import cn from 'classnames';

const Header: React.FC = () => {
	const { channelData, setChannelData, channelVideos, setChannelVideos, favoriteVideos, activeTab, setActiveTab } = useAppContext();

	const [userInput, setUserInput] = useState<string>('');

	const isInputEmpty: boolean = userInput.trim() === '';

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInput(value);
	};

	const markLiked = (a, b) => {
		let matches = a;

		for (var i = 0; i < a.length; i++) {
			for (var e = 0; e < b.length; e++) {
				if (a[i]._id === b[e]._id) {
					a[i].liked = true;
				}
			}
		}
		return matches;
	};

	const searchUser = async () => {
		await axios.get(`http://localhost:3000/api/channel/${userInput}`).then((response) => {
			const user = response.data;

			setChannelData(user);
			axios.get(`http://localhost:3000/api/videos/${user?._id}`).then((response) => {
				const videos = response.data.videos;
				setChannelVideos(() => {
					return markLiked(videos, favoriteVideos);
				});
			});
		});
	};

	return (
		<header className={header}>
			<div className={header__container}>
				<div className={cn(header__search, { [_active]: activeTab === 'channel' })} onClick={() => setActiveTab('channel')}>
					<label htmlFor='header__search-input' className={header__searchLabel}>
						Введите название канала
					</label>
					<input type='text' className={header__searchInput} placeholder='Поиск' onChange={inputHandler} />
					<SearchIcon className={cn(header__searchBtn, { [_active]: !isInputEmpty })} disabled={!isInputEmpty} onClick={searchUser}></SearchIcon>
				</div>
				<div className={cn(header__favorite, { [_active]: activeTab === 'favorites' })} onClick={() => setActiveTab('favorites')}>
					<FavoriteIcon className={header__favoriteIcon}></FavoriteIcon> Избранное
					<span className={header__favoriteCount}>{favoriteVideos.length}</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
