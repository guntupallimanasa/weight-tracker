import React from "react";
import "../../src/style.css";
import { increment } from "../Actions";
import { connect } from "react-redux";

export const App = ({cnt,increment}) =>{
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{cnt}</p>
      <button onClick = {increment}>+</button>
    </div>
  );
}

const mapStateToProps = state =>{
  return {
      cnt: state.CounterReducer
  }
}

const mapDispatchToProps = dispatch=>{
  return {
      increment: (e)=>{dispatch(increment(e))}
  }
}

const Container = connect(mapStateToProps,mapDispatchToProps)(App);
export default Container;