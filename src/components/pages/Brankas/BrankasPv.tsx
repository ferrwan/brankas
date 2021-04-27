import { Layout, Menu } from 'antd';
import * as React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const { bridge } = window as any;

const { Content, Sider } = Layout;

type Props = {

}

type State = {
  vault: any,
}

class Brankas extends React.Component<Props, State> {
  componentDidMount() {
    bridge.send('getFile');
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu theme="dark" mode="inline">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="users">
              <Link to="/users">Users</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Content>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

bridge.receive('createData', (data: any) => {
  console.log('RECEIVEC', data);
});

export default Brankas;
