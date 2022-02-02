import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { Input } from 'antd';
import { connect } from "react-redux";
import { Radio, Button } from 'antd';
import { userInputValues } from '../Actions'

const Create = ({ settingsUserDataReducer, userInputValues }) => {
  console.log('>>>>>settingsUserDataReducer', settingsUserDataReducer)
  const [initialValue, setInitialValue] = useState({
    Weight: 0,
    BMI: 0,
    Muscle: 0,
    VC_Fat: 0,
    Fat: 0,
    Age: 0
  })

  const onChangeHandler = (e) => {
    if (e.target.name === "Weight") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    } else if (e.target.name === "BMI") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    } else if (e.target.name === "Muscle") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    } else if (e.target.name === "VC_Fat") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    } else if (e.target.name === "Fat") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    } else if (e.target.name === "Age") {
      setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
    }
  }
  const submitHandler = (evt) => {
    userInputValues(initialValue)
  }
  return <div>
    <h2>Create Record</h2>
    {
      settingsUserDataReducer.UIList.map(item => <div>
        {
          item.isChecked ? <div>
            <span>{`${item.name}`}:</span>
            <input
              name={`${item.name}`}
              style={{ width: '150px', margin: '10px' }}
              placeholder={`Enter ${item.name}`}
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
            : null
        }
      </div>)
    }
    <br />

    <Button type="primary" htmlType="submit" onClick={submitHandler}>
      Save
    </Button>
  </div>
}

const mapStateToProps = state => {
  return {
    settingsUserDataReducer: state.settingsUserDataReducer
  }
}

const createContainer = connect(mapStateToProps, { userInputValues })(Create);
export default createContainer;
