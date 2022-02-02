const initialState = {
        Weight: 0,
        BMI: 0,
        Muscle: 0,
        VC_Fat: 0,
        Fat: 0,
        Age: 0
}

const enteredVAluesReducer = (state = initialState,action)=>{
    switch(action.type){
        case "USER_INPUT_VALUES":return action.payload;
        default: return state;
    }
}

export default enteredVAluesReducer;