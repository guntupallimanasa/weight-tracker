const initialState = {
}

const enteredVAluesReducer = (state = initialState,action)=>{
    console.log('>>> in reducer action.payload',action.payload)
    switch(action.type){
        case "USER_INPUT_VALUES":return action.payload;
        default: return state;
    }
}

export default enteredVAluesReducer;