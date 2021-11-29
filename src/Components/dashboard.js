import React from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';

export default ({isLogin})=>{
    // if (!isLogin) {
    //     return <Redirect to='/login' exact />
    //   }
    return <div>Im in Dashboard</div>
}
