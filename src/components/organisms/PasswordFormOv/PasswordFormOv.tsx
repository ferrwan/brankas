import * as React from 'react';
import { Button, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { customAlphabet } from 'nanoid';

import { pwdsState } from '../../../recoil/vault-state';

type Props = {
  pwd: Pwd;
};

const replaceItemAtIndex = (arr: Pwd[], index: number, newValue: Pwd) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(ALPHABET, 10);
const forms = [
  { name: 'name', label: 'Name' },
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
  const { pwdId } = useParams<RouteParams>();
  const [pwds, setPwds] = useRecoilState(pwdsState);
  let newPwds = pwds;
  const onFinish = (values: Pwd) => {
    const now = Date.now();
    if (pwdId === 'new') {
      newPwds = pwds.concat({
        ...values,
        id: nanoid(),
        createdAt: now,
        updatedAt: now,
      });
    } else {
      const index = pwds.findIndex((i) => i.id === pwd?.id);
      newPwds = replaceItemAtIndex(pwds, index, {
        ...pwd,
        ...values,
        updatedAt: now,
      });
    }
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
