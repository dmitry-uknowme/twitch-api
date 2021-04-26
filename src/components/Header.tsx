import React, { useEffect, useState, useContext } from 'react';
import './Header.sass';
import axios from 'axios';
import Context from './Context';

const Header: React.FC = () => {
	const [userInput, setUserInput] = useState<string>();
	//@ts-expect-error
	const { setFoundChannels, foundChannels } = useContext(Context);

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setUserInput(value);
	};

	const searchUsers = (searchStr: string) => {
		axios
			.get(`https://api.twitch.tv/kraken/users?login=${searchStr}`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
			.then((response) => setFoundChannels(response.data));
	};
	// console.log('channel', foundChannels);
	useEffect(() => {
		if (userInput) {
			searchUsers(userInput);
		}
	}, [userInput]);
	return (
		<header className='header'>
			<div className='header__search'>
				<label htmlFor='header__search-input' className='header__search-label'>
					Введите название канала
				</label>
				<input type='text' className='header__search-input' onChange={inputHandler} />
				<button className='header__search-btn'>Найти</button>
			</div>
		</header>
	);
};

export default Header;
