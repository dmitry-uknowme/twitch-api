import { useState, createContext, useContext } from 'react';
//@ts-expect-error
const AppContext = createContext();

export function AppWrapper({ children }) {
	const [channel, setChannel] = useState<Object>({ name: 'bvuster' });
	let sharedState = {
		channel,
		setChannel,
	};

	return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	return useContext(AppContext);
}
