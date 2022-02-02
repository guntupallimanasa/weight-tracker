import { Checkbox, Divider } from 'antd';
import React from "react";
import { Radio, Button } from 'antd';
import { settingsUserData } from "../Actions";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link,useHistory } from 'react-router-dom';

const Settings = ({ settingsUserData, settingsDataReducer }) => {
  let history = useHistory();

  const [UIList, setUIList] = React.useState(settingsDataReducer.UIList);
  const [UDList, setUDList] = React.useState(settingsDataReducer.UDList);
  const [value, setValue] = React.useState(settingsDataReducer.selectedLanguage);

  const onChangeUserInput = e => {
    const eleIndex = UIList.findIndex(item=>item.id === e.target.id);
    let newArray = [...UIList];
    newArray[eleIndex] = {... newArray[eleIndex], isChecked:e.target.checked }
    setUIList(newArray)
  };
  const onChangeUserDisplay = e => {
    const eleIndex = UDList.findIndex(item=>item.id === e.target.id);
    let newArray = [...UDList];
    newArray[eleIndex] = {... newArray[eleIndex], isChecked:e.target.checked }
    setUDList(newArray)
  };

  const onChangeRadioButton = e => {
    setValue(e.target.value);
  };
  const submitHandler = (evt) => {
    settingsUserData({UIList,UDList, selectedLanguage: value})
  }
  const cancelHandler = (evt) => {
    history.push('/dashboard');
  }

  return (
    <>
      <h2>User Input Data</h2>
      {
        UIList.map(item => <div>
          <Checkbox value={item.name}
            onChange={onChangeUserInput}
            isChecked={item.isChecked}
            id = {item.id}
            defaultChecked={item.isChecked? true : false}>
            {item.name}
          </Checkbox>
        </div>)
      }
       <br />
      <br />
      <Divider />
      <h2>User Display Data</h2>
      {
        UDList.map(item => <div>
          <Checkbox value={item.name}
            onChange={onChangeUserDisplay}
            isChecked={item.isChecked}
            id = {item.id}
            defaultChecked={item.isChecked? true : false}>
            {item.name}
          </Checkbox>
        </div>)
      }
       <Divider />
      <h2>Language</h2>
      <Radio.Group onChange={onChangeRadioButton} value={value}>
        <Radio value='English'>English</Radio>
        <Radio value='Telugu'>Telugu</Radio>
      </Radio.Group>
      <br />
      <br />

      <Button type="primary" htmlType="submit" onClick={submitHandler}>
        Save
      </Button>
      <br />
      <br />

      <Button type="primary" htmlType="submit" onClick={cancelHandler}>
        Cancel
      </Button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    settingsDataReducer: state.settingsUserDataReducer
  }
}

const settingsContainer = connect(mapStateToProps, { settingsUserData })(Settings);
export default settingsContainer;