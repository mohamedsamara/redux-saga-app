/**
 *
 * Gallery
 *
 */

import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Container, Divider, Grid } from 'semantic-ui-react';

import style from './style.css';

const Gallery = props => {
  const { photos } = props;

  const photoNodes = photos.map(photo => (
    <Grid.Column key={photo.id} mobile={16} tablet={8} computer={4}>
      <Card>
        <Image
          src={photo.images.fixed_height_still.url}
          className={style.galleryPhoto}
        />
        <Card.Content>
          <Card.Meta>
            <span className='date'>{photo.import_datetime}</span>
          </Card.Meta>
          <Card.Description>{photo.title}</Card.Description>
        </Card.Content>
        {photo.source_tld && (
          <Card.Meta>
            <span>{photo.source_tld}</span>
          </Card.Meta>
        )}
        <Card.Content extra>
          <a>
            {photo._score}
            <span className={style.score}> score</span>
          </a>
        </Card.Content>
      </Card>
    </Grid.Column>
  ));

  return (
    <Container textAlign='center'>
      <Grid divided inverted stackable>
        {photoNodes}
      </Grid>
    </Container>
  );
};

export default Gallery;
