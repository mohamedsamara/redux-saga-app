/**
 *
 * Header
 *
 */

import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Header = props => {
  return (
    <Menu fixed='top'>
      <Container>
        <Menu.Item as='a' header>
          Photo Gallery
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
