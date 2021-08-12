import * as React from 'react';
import {
  Link, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import PasswordTv from '../PasswordTv';

type Props = {
  pwds: Pwd[];
};

const List: React.VFC<Props> = ({ pwds }) => {
  const { url } = useRouteMatch();

  return (
    <>
      {pwds.map((pwd) => (
        <div key={pwd.id}>
          <Link to={`${url}/${pwd.id}`}>{pwd.name}</Link>
        </div>
      ))}
    </>
  );
};

const PasswordListTv: React.VFC<Props> = ({ pwds }) => {
  const { url } = useRouteMatch();

  return (
    <div className="p-48">
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
