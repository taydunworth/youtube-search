import axios from 'axios';

const KEY = 'ACCESS-KEY-HERE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v2',
    params: {
        part:: 'snippet',
        maxResults: 5,
        key: KEY
    }
});