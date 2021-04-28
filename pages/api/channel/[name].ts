import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const channelAPI = (req: NextApiRequest, res: NextApiResponse) => {
	const channelName = req.query.name;
	axios.get(`https://api.twitch.tv/kraken/users?login=${channelName}`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } }).then((response) => {
		const user = response.data.users[0];
		res.json(user);
	});
};

export default channelAPI;
