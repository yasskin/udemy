import axios from 'axios';

const API_KEY = 'AIzaSyDXApj48SLW1WK4xin6w2RNBWNaQHyym9w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: API_KEY,
  },
});
