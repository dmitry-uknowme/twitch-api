import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const channelApi = (req: NextApiRequest, res: NextApiResponse) => {
	const channelId = req.query.id;
	axios
		.get(`https://api.twitch.tv/kraken/channels/${channelId}/videos?limit=100`, { headers: { Accept: 'application/vnd.twitchtv.v5+json', 'client-id': 'wbmytr93xzw8zbg0p1izqyzzc5mbiz' } })
		.then((response) => res.json(response.data));
};

export default channelApi;
