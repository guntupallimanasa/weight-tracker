import { Checkbox, Divider } from 'antd';
import React from "react";

const CheckboxGroup = Checkbox.Group;

const userDisplayplainOptions = ['Weight', 'BMI', 'Muscle', 'Vc Fat', 'Fat', 'Age'];
const userDisplayDefaultCheckedList = ['Weight'];

const userInputplainOptions = ['Weight', 'BMI', 'Muscle', 'Vc Fat', 'Fat', 'Age'];
const userInputDefaultCheckedList = ['Weight'];

export default() => {
  const [UIcheckedList, UIsetCheckedList] = React.useState(userInputDefaultCheckedList);
  const [UIindeterminate, UIsetIndeterminate] = React.useState(true);
  const [UIcheckAll, UIsetCheckAll] = React.useState(false);

  const [UDcheckedList, UDsetCheckedList] = React.useState(userDisplayDefaultCheckedList);
  const [UDindeterminate, UDsetIndeterminate] = React.useState(true);
  const [UDcheckAll, UDsetCheckAll] = React.useState(false);

  const onChangeUI = list => {
    UIsetCheckedList(list);
    UIsetIndeterminate(!!list.length && list.length < userInputplainOptions.length);
    UIsetCheckAll(list.length === userInputplainOptions.length);
  };

  const onCheckAllChangeUI = e => {
    UIsetCheckedList(e.target.checked ? userInputplainOptions : []);
    UIsetIndeterminate(false);
    UIsetCheckAll(e.target.checked);
  };

  const onChangeUD = list => {
  UDsetCheckedList(list);
  UDsetIndeterminate(!!list.length && list.length < userDisplayplainOptions.length);
  UDsetCheckAll(list.length === userDisplayplainOptions.length);
};

const onCheckAllChangeUD= e => {
  UDsetCheckedList(e.target.checked ? userDisplayplainOptions : []);
  UDsetIndeterminate(false);
  UDsetCheckAll(e.target.checked);
};

  return (
    <>
      <Checkbox indeterminate={UIindeterminate} onChange={onCheckAllChangeUI} checked={UIcheckAll}>
        Check all
      </Checkbox>
      <h3>User Input Data</h3>
      <Divider />
      <CheckboxGroup options={userInputplainOptions} value={UIcheckedList} onChange={onChangeUI} />
      <br/>
      <Checkbox indeterminate={UDindeterminate} onChange={onCheckAllChangeUD} checked={UDcheckAll}>
        Check all
      </Checkbox>
      <h3>User Display Data</h3>
      <Divider />
      <CheckboxGroup options={userDisplayplainOptions} value={UDcheckedList} onChange={onChangeUD} />
    </>
  );
};