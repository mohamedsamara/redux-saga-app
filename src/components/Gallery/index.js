/**
 *
 * Gallery
 * @flow
 */

import React from 'react';
import { Divider, Grid, Card, Icon, Image } from 'semantic-ui-react';

import styles from './styles.css';

type Props = {
  animatePhoto: Function,
  getPhotos: Function,
  photos: Array<Object>,
  loading: boolean
};

const Gallery = (props: Props) => {
  const { photos, animatePhoto } = props;

  const photoNodes = photos.map((photo, index) => (
    <Grid.Column key={photo.id} mobile={8} tablet={8} computer={4}>
      <Card>
        <Image
          src={
            photo.isAnimated
              ? photo.images.fixed_height.url
              : photo.images.fixed_height_still.url
          }
          className={styles.galleryPhoto}
          onClick={() => {
            animatePhoto(index, photo.isAnimated ? false : true);
          }}
        />

        <Card.Content>
          <Card.Meta>
            <span className='date'>{photo.import_datetime}</span>
          </Card.Meta>
          <Card.Description>{photo.title}</Card.Description>
          {photo.source_tld && (
            <Card.Meta>
              <span>{photo.source_tld}</span>
            </Card.Meta>
          )}
        </Card.Content>
        <Card.Content extra>
          <a>
            {photo._score}
            <span className={styles.score}> score</span>
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  ));

  return (
    <div className={styles.gallery}>
      <Grid>{photoNodes} </Grid>
    </div>
  );
};

export default Gallery;
