import React from "react";
import { Notification, Settings, Login, Profile, Dashboard, Create } from "../Components";
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default ({ val }) => {

    const renderComponent = (val) => {
        if (val === 'Notification') {
            return <Notification />
        } else if (val === 'Settings') {
            return <Settings />
        } else if (val === 'Profile') {
            return <Profile />
        } else if (val === 'Dashboard') {
            return <Dashboard />
        }else if (val === 'Create') {
            return <Create />
        }
        return "wrong route";
    }
    return <div>
          <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {
              renderComponent(val)
          }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> Design ©2021 Created by Manasa</Footer>
    </Layout>
    </div>
}
