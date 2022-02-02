import {addUsers, userenteredValues} from '../Components/shared/service'

export const checkLogin = (payload)=>{
    return async dispatch => {
        
        const res = await addUsers(payload.username);

        dispatch({
			type: "IS_LOGIN",
		});
    }
}


export const settingsUserData = (payload)=>{
    return async dispatch => {
        
        dispatch({
			type: "SETTINGS_USER_Data",
            payload
		});
    }
}

export const userInputValues = (payload)=>{
    return async dispatch => {
        console.log('>>in Actions payload',payload)
        const res = await userenteredValues(payload);
        
        dispatch({
			type: "USER_INPUT_VALUES",
            payload
		});
    }
}





