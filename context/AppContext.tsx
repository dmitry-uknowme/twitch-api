import React, { useState, createContext, useContext } from 'react';
import { IChannelData } from '../components/Channel/Channel';
import { IVideo } from '../components/VideoItem/VideoItem';

const AppContext = createContext(null);

export const AppWrapper: React.FC<React.ReactChildren> = ({ children }) => {
	const [channelData, setChannelData] = useState<IChannelData>();
	const [channelVideos, setChannelVideos] = useState<IVideo[]>();
	const [favoriteVideos, setFavoriteVideos] = useState<IVideo[]>([]);
	const [activeTab, setActiveTab] = useState<string>('channel');
	let sharedState = {
		channelData,
		setChannelData,
		channelVideos,
		setChannelVideos,
		favoriteVideos,
		setFavoriteVideos,
		activeTab,
		setActiveTab,
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
