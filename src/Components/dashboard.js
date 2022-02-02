import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, useHistory, NavLink, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import './style.css';

const Dashboard = ({ settingsUserDataReducer, enteredVAluesReducer }) => {

    return <div>
        {
            settingsUserDataReducer.UDList.map(item => <span>
                {
                    item.isChecked ? <span className="display-data">
                        {
                            Object.keys(enteredVAluesReducer).map((key, i) => <p key={i}>
                                {
                                    item.name === key ? (<div><span>{item.name} : </span><span>{enteredVAluesReducer[item.name]}</span></div>) : null
                                }
                            </p>
                            )
                        }

                    </span>
                        : null
                }
            </span>)
        }
    </div>
}

const mapStateToProps = state => {
    return {
        settingsUserDataReducer: state.settingsUserDataReducer,
        enteredVAluesReducer: state.enteredVAluesReducer
    }
}

const dashboardContainer = connect(mapStateToProps, {})(Dashboard);
export default dashboardContainer;
