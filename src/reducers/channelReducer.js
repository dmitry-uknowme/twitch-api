const SET_CHANNEL = 'SET_CHANNEL';
const SET_CHANNEL_VIDEOS = 'SET_CHANNEL_VIDEOS';
const ADD_CHANNEL_VIDEOS = 'ADD_CHANNEL_VIDEOS';

const defaulState = {
	data: {},
	videos: [],
};

const channelReducer = (state = defaulState, action) => {
	switch (action.type) {
		case SET_CHANNEL:
			return {
				...state,
				data: action.payload,
			};

		case SET_CHANNEL_VIDEOS:
			return {
				...state,
				videos: action.payload,
			};

		case ADD_CHANNEL_VIDEOS:
			return {
				...state,
				videos: [...state.channelVideos, action.payload],
			};

		default:
			return state;
	}
};

export const setChannel = (data) => ({ type: SET_CHANNEL, payload: data });
export const setChannelVideos = (data) => ({ type: SET_CHANNEL_VIDEOS, payload: data });
export const addChannelVideos = (data) => ({ type: ADD_CHANNEL_VIDEOS, payload: data });

export default channelReducer;
