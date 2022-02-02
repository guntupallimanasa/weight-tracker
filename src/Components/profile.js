import React, { useRef , useState} from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { checkLogin, checkUsername } from "../Actions";
import { Radio, Button } from 'antd';

const Profile = ({ username, checkUsername }) => {
  const [name,setName] = useState(username)
  const changeInput = (e) => {
    setName(e.target.value)
  }
  const submitHandler = (evt) => {
    checkUsername({ username: name})
  }

  return <div>
    <span>User Name: </span>
    <input
      style={{ margin: '10px' }}
      defaultValue={` ${username}`}
      autoFocus={true}
      onChange={(e) => changeInput(e)}
    />
     <br />

     <Button type="primary" htmlType="submit" onClick={submitHandler}>
      Save
    </Button>

  </div>
}

const mapStateToProps = state => {
  return {
    username: state.getUsernameReducer
  }
}

const profileContainer = connect(mapStateToProps, { checkUsername })(Profile);
export default profileContainer;