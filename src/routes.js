import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Dashboard, Notification, Settings, Login, Profile, Home, Create} from "./Components";

export const Routes=({isLogin})=> {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home">Dashboard</Link>
            </li>
            <li>
              <Link to="/notifications">Notification</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
        <Route path="/notifications">
            <Notification isLogin = {isLogin}/>
          </Route>
          <Route path="/profile">
            <Profile isLogin = {isLogin}/>
          </Route>
          <Route path="/home">
            <Home isLogin = {isLogin}/>
          </Route>
          <Route path="/settings">
            <Settings isLogin = {isLogin}/>
          </Route>
          <Route path="/create">
            <Create isLogin = {isLogin}/>
          </Route>
          <Route path="/">
            <Login isLogin = {isLogin}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const mapStateToProps = state=>{
  return {
    isLogin: state.LoginReducer
  }
}
const Container = connect(mapStateToProps)(Routes)

export default Container;


