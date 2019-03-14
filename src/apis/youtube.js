import axios from 'axios';

const KEY = 'AIzaSyBdRYNS8J-FobddIF5qSYfMW5cOSBZ-G3I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v2',
    params: {
        part:: 'snippet',
        maxResults: 5,
        key: KEY
    }
});