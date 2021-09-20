import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { useRecoilState } from 'recoil';

import { pwdsState } from '../../../recoil/vault-state';

type Props = {
  pwd: Pwd;
};

function replaceItemAtIndex(arr: Pwd[], index: number, newValue: Pwd) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

const forms = [
  { name: 'user', label: 'User' },
  { name: 'password', label: 'Password' },
  { name: 'url', label: 'Website' },
  { name: 'note', label: 'Note' },
];

const renderForms = () => forms.map((form) => (
  <Form.Item label={form.label} name={form.name} key={form.name}>
    <Input />
  </Form.Item>
));

const PasswordFormOv: React.VFC<Props> = ({ pwd }) => {
  const [pwds, setPwds] = useRecoilState(pwdsState);
  const index = pwds.findIndex((i) => i.id === pwd.id);
  const onFinish = (values: Pwd) => {
    const newPwds = replaceItemAtIndex(pwds, index, {
      ...pwd,
      ...values,
    });
    setPwds(newPwds);
    bridge.send('saveData', { pwds: newPwds });
  };

  return (
    <Form
      initialValues={pwd}
      size="large"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      {renderForms()}
      <Form.Item label="Folder" name="folder">
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 4 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PasswordFormOv;
