import { Container, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

interface IChildren {
  children: Node,
};

const Layout = ({ children } : IChildren) => {
  return (
    <>
      <Menu>
        <Menu.Item><Icon name="camera"/> Interview Frontend App</Menu.Item>
        <Menu.Item position="right"><Icon circular inverted name="user"/></Menu.Item>
      </Menu>
      <Container>
          { children }
      </Container>
      <Container textAlign="center" style={{marginTop: '5rem'}}>
        @Interview Frontend App 2021
      </Container>
    </>
  )
};

export default Layout;