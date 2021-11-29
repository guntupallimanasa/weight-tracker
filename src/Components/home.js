import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../style.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { Notification, Settings, Login, Profile, LayoutComponent } from ".";

const { Header, Content, Footer, Sider } = Layout;

export default ({ isLogin }) => {

  if (!isLogin) {
    return <Redirect to='/login' exact />
  }
  const [selectedValue, setSelectedValue] = useState('Dashboard');
  const data = [
    { name: 'Profile', to: '/profile', key: '1' },
    { name: 'Dashboard', to: '/dashboard', key: '2' },
    { name: 'Notification', to: '/notifications', key: '3' },
    { name: 'Settings', to: '/settings', key: '4' },
    { name: 'Profile', to: '/profile', key: '1' },
    { name: 'Dashboard', to: '/dashboard', key: '2' },
    
  ]

  const selectItemHandler = (e) => {
    if (e.key == '1') setSelectedValue('Profile')
    if (e.key == '2') setSelectedValue('Dashboard')
    if (e.key == '3') setSelectedValue('Notification')
    if (e.key == '4') setSelectedValue('Settings')
  }

  useEffect(()=>{
    let val = localStorage.getItem('selectedItem');
    if(selectedValue === ''){
      setSelectedValue(val);
    }
  },[])


  useEffect(()=>{
    localStorage.setItem('selectedItem',selectedValue)
  },[selectedValue])

  return (
    <Router>
      <Layout>
        <Sider
          breakpoint="lg"
          onBreakpoint={broken => {
            console.log(broken);
          }}
        >
          <div className="logo" />
          {
            data.map(item => (
              <NavLink to={item.to}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
                  <Menu.Item key={item.key} icon={<UserOutlined />} onClick={selectItemHandler}>
                    {item.name}
                  </Menu.Item>
                </Menu>
              </NavLink>
            ))
          }
        </Sider>
        <LayoutComponent val={selectedValue} />
      </Layout>
    </Router>
  )
}
