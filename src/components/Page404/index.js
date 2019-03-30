/**
 *
 * Page404
 *
 */

import React from 'react';

import Wrapper from './Wrapper';
import Styled404 from './Styled404';
import styles from './styles.css';

const Page404 = props => {
  console.log('props', props);

  return (
    <Wrapper>
      <Styled404>404 Oops! You are lost.</Styled404>
      <Styled404 paragraph>
        The page you are looking for was not found.
      </Styled404>
    </Wrapper>
  );
};

export default Page404;
