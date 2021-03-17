import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization:
      'Client-ID ad8ee9cbb962c06b6784749e7f3828d10c778437e3fa5fed512f67f68a17a19b'
  }
});
