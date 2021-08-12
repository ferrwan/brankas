import { LeftOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Button } from 'antd';
import { Redirect, useParams, useHistory } from 'react-router-dom';

type Props = {
  pwds: Pwd[];
};

const PasswordTv: React.VFC<Props> = ({ pwds }) => {
  const { pwdId } = useParams<RouteParams>();
  const { goBack } = useHistory();
  let pwd = null;
  if (pwdId) {
    pwd = pwds.find((i) => i.id.toString() === pwdId);
  }

  return (
    <div>
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        size="large"
        type="primary"
        onClick={goBack}
      />
      <h1>{pwd.name}</h1>
      {pwd ? (
        <div className="f-18">
          <div>User: {pwd.user}</div>
          <div>Password: {pwd.password}</div>
          <div>Website: {pwd.url}</div>
          <div>Note: {pwd.note}</div>
          <div>Folder: {pwd.folder}</div>
        </div>
      ) : (
        <Redirect to={{ pathname: '/password' }} />
      )}
    </div>
  );
};

export default PasswordTv;
