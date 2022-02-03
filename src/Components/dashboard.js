import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import './style.css';

const Dashboard = ({ settingsUserDataReducer, enteredVAluesReducer,fetchTimeReducer  }) => {
    return <div>
       
       <div>
       <div className="weight-text">Your Current Weight</div>
        <div className="weight-family">{enteredVAluesReducer.Weight} Kg</div>
        <div className="weight-time">updated on {fetchTimeReducer}</div>
       </div>
       <div className="display-data">
       {
            settingsUserDataReducer.UDList.map(item => <>
                {
                    item.isChecked ? <div>
                        {
                            Object.keys(enteredVAluesReducer).map((key, i) => <div key={i}>
                                {
                                    item.name === key ?<div className="items">{item.name} <div>{enteredVAluesReducer[item.name]}</div></div> : null
                                }
                            </div>
                            )
                        }

                    </div>
                        : null
                }
            </>)
        }
       </div>
       
    </div>
}

const mapStateToProps = state => {
    return {
        settingsUserDataReducer: state.settingsUserDataReducer,
        enteredVAluesReducer: state.enteredVAluesReducer,
        fetchTimeReducer: state.fetchTimeReducer,

    }
}

const dashboardContainer = connect(mapStateToProps, {})(Dashboard);
export default dashboardContainer;
