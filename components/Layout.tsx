import Link from 'next/link';
import { Container, Menu } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react'

const Layout = ({ children }) => {
  return (
    <>
      <Menu>
        <Menu.Item>
          <Link href="/">
            <a style={{color: 'initial'}}>
              <Icon name="camera"/> Interview Frontend App
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item position="right"><Icon circular inverted name="user"/></Menu.Item>
      </Menu>
      <Container>
          { children }
      </Container>
      <Container
        textAlign="center"
        style={{padding: '3rem'}}
      >
        <p>@Interview Frontend App 2021</p>
        <div>
          <Link href="/terms-and-conditions">
            <a>Terms &amp; Conditions</a>
          </Link>
        </div>
      </Container>
    </>
  )
};

export default Layout;