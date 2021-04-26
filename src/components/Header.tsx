import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel, setChannelVideos } from '../reducers/channelReducer';
import './Header.sass';
import axios from 'axios';

const Header: React.FC = () => {
	const dispatch = useDispatch();
	const [userInput, setUserInput] = useState<string>();

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInput(value);
	};

	const searchUsers = async () => {
		await axios
			.get(`https://api.twitch.tv/kraken/users?login=${userInput}`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
			.then((response) => {
				const user = response.data.users[0];
				dispatch(setChannel(user));
				axios
					.get(`https://api.twitch.tv/kraken/channels/${user?._id}/videos?limit=100`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
					.then((res) => dispatch(setChannelVideos(res.data)));
			});
	};

	return (
		<header className='header'>
			<div className='header__search'>
				<label htmlFor='header__search-input' className='header__search-label'>
					Введите название канала
				</label>
				<input type='text' className='header__search-input' onChange={inputHandler} />
				<button className='header__search-btn' onClick={searchUsers}>
					Найти
				</button>
			</div>
		</header>
	);
};

export default Header;
