const SET_CHANNEL = 'SET_CHANNEL';
const SET_CHANNEL_VIDEOS = 'SET_CHANNEL_VIDEOS';
const ADD_CHANNEL_VIDEOS = 'ADD_CHANNEL_VIDEOS';
const LIKE_VIDEO = 'LIKE_VIDEO';

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
		case LIKE_VIDEO:
			// console.log('now', state.videos[action.payload].liked, 'will be', !state.videos[action.payload].liked);
			localStorage.setItem('favoriteVideos', JSON.stringify([...JSON.parse(localStorage.getItem('favoriteVideos')), state.videos[action.payload]]));
			return {
				...state,
				videos: [
					...state.videos.slice(0, action.payload),
					Object.assign(state.videos[action.payload], {
						liked: !state.videos[action.payload].liked,
					}),
					...state.videos.slice(action.payload + 1),
				],
			};

		default:
			return state;
	}
};

export const setChannel = (data) => ({ type: SET_CHANNEL, payload: data });
export const setChannelVideos = (data) => ({ type: SET_CHANNEL_VIDEOS, payload: data });
export const addChannelVideos = (data) => ({ type: ADD_CHANNEL_VIDEOS, payload: data });
export const likeVideo = (data) => ({ type: LIKE_VIDEO, payload: data });

export default channelReducer;
