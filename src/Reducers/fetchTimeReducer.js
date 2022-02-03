const initialState =''

const fetchTimeReducer = (state = initialState,action)=>{
switch(action.type){
    case "FETCH_TIME":return action.payload;
    default: return state;
}
}

export default fetchTimeReducer;