/**
 *
 * PhotoGallery types
 * @flow
 */

export type PhotoType = {
  analytics: Object,
  bitly_gif_url: string,
  bitly_url: string,
  content_url: string,
  embed_url: string,
  id: string,
  images: Object,
  import_datetime: string,
  is_sticker: string,
  rating: string,
  slug: string,
  source: string,
  source_post_url: string,
  source_tld: string,
  title: string,
  trending_datetime: string,
  type: string,
  url: string,
  user?: Object,
  username: string,
  _score: number,
  map: Function
};

export type PhotosType = {
  photos: Array<PhotoType>
};

export type GalleryAction = {
  type: string,
  photos?: PhotosType,
  error?: string,
  index?: number,
  loading?: boolean,
  isAnimated?: boolean
};
