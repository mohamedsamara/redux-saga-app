/*
 *
 * call apis using Axios
 *
 */

import axios from 'axios';

import config from './config';
const apiKey = config.apiKey;

export default {
  gallery: {
    getPhotos: () =>
      axios
        .get('https://api.giphy.com/v1/gifs/search?q=sport&api_key=' + apiKey)
        .then(response => {
          return response.data.data;
        })
  }
};
