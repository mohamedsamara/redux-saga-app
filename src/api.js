import axios from 'axios';

export default {
  gallery: {
    getPhotos: () =>
      axios
        .get(
          'https://api.giphy.com/v1/gifs/search?q=sport&api_key=ZhrVs1bOcGeNlrsYqdBK1z3G9kt83xc7'
        )
        .then(res => res.data)
  }
};
