import { Checkbox, Divider } from 'antd';
import React from "react";
import { Radio, Button } from 'antd';
import { settingsUserData } from "../Actions";
import { connect } from "react-redux";

const Settings = ({ settingsUserData }) => {

  const [UIList, setUIList] = React.useState([
    { name: "Weight",isChecked:true, id:0 },
    { name: "BMI" ,isChecked:false, id:1},
    { name: "Muscle" ,isChecked:false, id:2 },
    { name: "VC_Fat",isChecked:false, id:3 },
    { name: "Fat" ,isChecked:false, id:4},
    { name: "Age",isChecked:false, id:5}
  ]);
  const [UDList, setUDList] = React.useState([
    { name: "Weight",isChecked:true, id:0 },
    { name: "BMI",isChecked:false, id:1},
    { name: "Muscle" ,isChecked:false, id:2},
    { name: "VC_Fat",isChecked:false , id:3},
    { name: "Fat",isChecked:false , id:4},
    { name: "Age" ,isChecked:false, id:5}
  ]);
  const [value, setValue] = React.useState('English');

  const onChangeUserInput = e => {
    const eleIndex = UIList.findIndex(item=>item.id === e.target.id);
    let newArray = [...UIList];
    newArray[eleIndex] = {... newArray[eleIndex], isChecked:e.target.checked }
    setUIList(newArray)
  };
  const onChangeUserDisplay = e => {
    console.log('>>>eonChangeUserDisplay', e)
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

  return (
    <>
      <h2>User Input Data</h2>
      {
        UIList.map(item => <div>
          <Checkbox value={item.name}
            onChange={onChangeUserInput}
            isChecked={item.isChecked}
            id = {item.id}
            defaultChecked={item.name === "Weight" ? true : false}>
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
            defaultChecked={item.name === "Weight" ? true : false}>
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