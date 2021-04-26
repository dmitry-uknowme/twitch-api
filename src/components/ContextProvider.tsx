import React, { useState } from 'react';
import Context from './Context';

const ContextProvider: React.FC = ({ children }) => {
	const [foundChannels, setFoundChannels] = useState<Object>();
	//@ts-expect-error
	return <Context.Provider value={{ foundChannels, setFoundChannels }}>{children}</Context.Provider>;
};

export default ContextProvider;
