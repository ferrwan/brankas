import * as React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import SidebarOv from '../../organisms/SidebarOv/SidebarOv';
import PasswordListTv from '../../templates/PasswordListTv';
import NoteTv from '../../templates/NoteTv';
import { pwdsState, vaultState } from '../../../recoil/vault-state';

function Home() {
  return <h2>Home</h2>;
}

const { Content } = Layout;

const Brankas: React.VFC<EmptyObject> = () => {
  const [pwds, setPwds] = useRecoilState(pwdsState);

  React.useEffect(() => {
    bridge.send('getFile');
    bridge.receive('createData', (vaultData: string) => {
      const { data = vaultState } = JSON.parse(vaultData);
      setPwds(data.pwds);
    });
  }, []);

  return (
    <Layout>
      <SidebarOv />

      <Layout style={{ marginLeft: 200 }}>
        <Content>
          <Switch>
            <Route path="/passwords">
              <PasswordListTv pwds={pwds} />
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
