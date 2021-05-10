const axios = require('axios');
const config = require("../config/default.json");

axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: config.YOUTUBE_KEY
    }
})
