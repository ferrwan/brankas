import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FileProtectOutlined, HomeFilled, LockFilled } from '@ant-design/icons';

const { Sider } = Layout;

const SidebarOv: React.VFC<EmptyObject> = () => (
  <Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0,
    }}
  >
    <Menu theme="dark" mode="inline">
      <Menu.Item key="home">
        <Link to="/">
          <HomeFilled />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="passwords">
        <Link to="/passwords">
          <LockFilled />
          Passwords
        </Link>
      </Menu.Item>
      <Menu.Item key="notes">
        <Link to="/notes">
          <FileProtectOutlined />
          Notes
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default SidebarOv;
