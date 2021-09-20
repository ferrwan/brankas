import * as React from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import PasswordFormOv from '~components/organisms/PasswordFormOv';

type Props = {
  pwds: Pwd[];
};

const PasswordTv: React.VFC<Props> = ({ pwds }) => {
  const { pwdId } = useParams<RouteParams>();
  const { goBack } = useHistory();
  let pwd: Pwd = null;
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
          <PasswordFormOv pwd={pwd} />
        </div>
      ) : (
        <Redirect to={{ pathname: '/password' }} />
      )}
    </div>
  );
};

export default PasswordTv;
