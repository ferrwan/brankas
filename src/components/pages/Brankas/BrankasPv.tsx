import * as React from 'react';
import { Layout } from 'antd';

import { Switch, Route, Redirect } from 'react-router-dom';

import SidebarOv from '../../organisms/SidebarOv/SidebarOv';
import PasswordListTv from '../../templates/PasswordListTv';
import NoteTv from '../../templates/NoteTv';

function Home() {
  return <h2>Home</h2>;
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
              <PasswordListTv pwds={vault.pwds} />
            </Route>
            <Route path="/notes">
              <NoteTv />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Redirect to={{ pathname: '/' }} />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Brankas;
