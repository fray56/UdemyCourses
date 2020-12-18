import axios from 'axios';

const KEY = 'AIzaSyDcXaGs9lVhX46yk2CQCr5Gk-CCP99UIow';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});