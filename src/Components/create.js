import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { Input } from 'antd';
import { connect } from "react-redux";
import { Radio, Button } from 'antd';
import { userInputValues, fetchedTime } from '../Actions'

const Create = ({ settingsUserDataReducer, userInputValues,fetchedTime, enteredVAluesReducer }) => {
  const [initialValue, setInitialValue] = useState(enteredVAluesReducer)

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
    let date = new Date().toDateString();
    userInputValues(initialValue)
    fetchedTime(date)
  }

  const cancelHandler = (evt) => {
  }
  return <div>
    <h2>Create Record</h2>
    {
      settingsUserDataReducer.UIList.map(item => <div>
        {
          item.isChecked ? <div>
            {
              Object.keys(enteredVAluesReducer).map((key, i) => <p key={i}>
                {
                  item.name === key ? (<div>
                    <span>{item.name} : </span>
                    <input
                      defaultValue={enteredVAluesReducer[item.name]}
                      autoFocus={true}
                      onChange={(event) => onChangeHandler(event)}
                      name={`${item.name}`}
                      style={{ margin: '10px' }}
                    />
                  </div>) : null
                }
              </p>
              )
            }
          </div>
            : null
        }
      </div>)
    }
    <br />

    <Button type="primary" htmlType="submit" onClick={submitHandler}>
      Save
    </Button>
    <br />
    <br />

    <Button type="primary" htmlType="submit" onClick={cancelHandler}>
      Cancel
    </Button>
  </div>
}

const mapStateToProps = state => {
  return {
    settingsUserDataReducer: state.settingsUserDataReducer,
    enteredVAluesReducer: state.enteredVAluesReducer,
  }
}

const createContainer = connect(mapStateToProps, { userInputValues, fetchedTime })(Create);
export default createContainer;
