import { Container, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
    <>
      <Menu>
        <Menu.Item><Icon name="camera"/> Interview Frontend App</Menu.Item>
        <Menu.Item position="right"><Icon circular inverted name="user"/></Menu.Item>
      </Menu>
      <Container>
          { children }
      </Container>
      <Container textAlign="center">
        @Interview Frontend App 2021
      </Container>
    </>
  )
};

export default Layout;