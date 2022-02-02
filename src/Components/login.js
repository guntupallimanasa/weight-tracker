import React from "react";
import {checkLogin, checkUsername } from "../Actions";
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link,useHistory } from 'react-router-dom';

export const Login= ({ cnt,checkLogin,checkUsername,isLogin  }) => {
  let history = useHistory();

  const onFinish = (values) => {
    checkLogin(values);
    checkUsername(values);
    history.push('/home');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const submitHandler = (evt) => {
    console.log('submitHandler:', evt);
  }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={submitHandler}>
          Submit
        </Button>
      </Form.Item>
    
    </Form>

  );
}

const mapStateToProps = state => {
  return {
    isLogin: state.LoginReducer

  }
}

const loginContainer = connect(mapStateToProps, {checkLogin, checkUsername})(Login);
export default loginContainer;