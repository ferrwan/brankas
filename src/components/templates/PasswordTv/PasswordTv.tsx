import * as React from 'react';

type Props = {
  pwds: Pwds[];
};

const List: React.VFC<Props> = ({ pwds }) => (
  <>
    {pwds.map((pwd) => (
      <div key={pwd.id}>{pwd.name}</div>
    ))}
  </>
);

const PasswordTv: React.VFC<Props> = ({ pwds }) => (
  <div className="container">
    <h1>Password Template</h1>
    <List pwds={pwds} />
  </div>
);

export default PasswordTv;
