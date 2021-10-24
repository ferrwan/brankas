import * as React from 'react';
import {
  Link, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import PasswordTv from '../PasswordTv';
import { pwdsState } from '../../../recoil/vault-state';

type Props = {
  pwds: Pwd[];
};

const deletePwdAtIndex = (arr: Pwd[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

const List: React.VFC<Props> = ({ pwds }) => {
  const { url } = useRouteMatch();
  const setPwds = useSetRecoilState(pwdsState);
  const deleteItem = (id: string | number) => {
    const index = pwds.findIndex((pwd) => pwd.id === id);
    const newPwds = deletePwdAtIndex(pwds, index);
    setPwds(newPwds);
    bridge.send('saveData', { pwds: newPwds });
  };

  return (
    <>
      {pwds.map((pwd) => (
        <div key={pwd.id}>
          <Link to={`${url}/${pwd.id}`}>{pwd.name}</Link>
          <button type="button" onClick={() => deleteItem(pwd.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

const PasswordListTv: React.VFC<Props> = ({ pwds }) => {
  const { url } = useRouteMatch();

  return (
    <div className="p-48">
      <Link to={`${url}/new`}>New</Link>
      <Switch>
        <Route path="/passwords" exact>
          <h1>Password Template</h1>
          <List pwds={pwds} />
        </Route>

        <Route path={`${url}/:pwdId`}>
          <PasswordTv pwds={pwds} />
        </Route>
      </Switch>
    </div>
  );
};

export default PasswordListTv;
