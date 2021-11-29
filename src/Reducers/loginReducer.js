const initialState = {
    login: false
}

const LoginReducer = (state = initialState,action)=>{
    switch(action.type){
        case "IS_LOGIN":return !state.login;
        default: return state;
    }
}

export default LoginReducer;