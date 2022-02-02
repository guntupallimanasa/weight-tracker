const initialState = {
    username:''
}

const getUsernameReducer = (state = initialState,action)=>{
    switch(action.type){
        case "IS_USERNAME":return action.payload.username;
        default: return state;
    }
}

export default getUsernameReducer;