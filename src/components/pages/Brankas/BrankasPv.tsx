import * as React from 'react';
import { Layout } from 'antd';

import { Switch, Route } from 'react-router-dom';
import SidebarOv from '../../organisms/SidebarOv/SidebarOv';
import PasswordTv from '../../templates/PasswordTv/PasswordTv';

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const { Content } = Layout;

const initialVault: Vault = {
  pwds: [],
};

const Brankas: React.VFC<EmptyObject> = () => {
  const [vault, setVault] = React.useState(initialVault);

  React.useEffect(() => {
    bridge.send('getFile');
    bridge.receive('createData', (vaultData: string) => {
      const { data = initialVault } = JSON.parse(vaultData);
      setVault(data);
    });
  }, []);

  return (
    <Layout>
      <SidebarOv />

      <Layout style={{ marginLeft: 200 }}>
        <Content>
          <Switch>
            <Route path="/passwords">
              <PasswordTv pwds={vault.pwds} />
            </Route>
            <Route path="/notes">
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
};

export default Brankas;
