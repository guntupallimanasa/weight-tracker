import React from "react";
import { increment, checkLogin } from "../Actions";
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { useQuery, useMutation, gql } from '@apollo/client';
import { getAll, getAllUsers} from '../GraphQl/query'
import { CREATE_POST, DELETE_POST, CREATE_USER } from '../GraphQl/mutation'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link,useHistory } from 'react-router-dom';



export const Login= ({ cnt, increment,checkLogin,isLogin  }) => {
  let history = useHistory();
  const { loading, error, data } = useQuery(getAll);
  const { errorr, users } = useQuery(getAllUsers);
  const [createUser, { err }] = useMutation(CREATE_USER)
  const [createPost, { errorrr }] = useMutation(CREATE_POST)
  const [deletePost, { errors }] = useMutation(DELETE_POST)

  const [title, setTitle] = useState(null);
  const [description, setdescription] = useState(null);
  const [remember, setremember] = useState(false);
  const addPost = () => {
    createPost({
      variables: {
        title: title,
        description: description
      }
    })
  }

  const addUser = (username,password) => {
    createUser({
      variables: {
        username,
        password
      }
    })
  }

  const removePost = (id) => {
    deletePost({
      variables: {
        id: id
      }
    })
  }

  if (loading) return "Losding........."

  if (error) return "Error...."


  const onFinish = (values) => {
    setremember(values.remember);
    checkLogin(remember);
    addUser(values.username,values.password);
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
    
      {/* {
        data.getAll.map(data => (
          <>
            <p>{data.title}-----{data.description}</p>
            <button onClick={() => removePost(data.id)}>Delete Post</button>
          </>
        ))
      }
      {
        users && users.getAllUsers.map(item=><p>{item.username}------{item.password}</p>)
      }

      <br />
      Title----<input onChange={(e) => setTitle(e.target.value)} />
      <br />
      description----<input onChange={(e) => setdescription(e.target.value)} />

      <button onClick={addPost}>Add Post</button> */}
    </Form>

  );
}

const mapStateToProps = state => {
  return {
    cnt: state.CounterReducer,
    isLogin: state.LoginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (e) => { dispatch(increment(e)) },
    checkLogin: (e) => { dispatch(checkLogin(e)) }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Container;