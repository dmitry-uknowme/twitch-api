import { useState, createContext, useContext } from 'react';
//@ts-expect-error
const AppContext = createContext();

export function AppWrapper({ children }) {
	const [channelData, setChannelData] = useState<object>();
	const [channelVideos, setChannelVideos] = useState<object[]>();
	const [favoriteVideos, setFavoriteVideos] = useState<object[]>([]);
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
}

export function useAppContext() {
	return useContext(AppContext);
}
