/**
 *
 * Header
 *
 */

import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const Header = props => {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item>
          <Link className={styles.title} to='/'>
            Photo Gallery
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
