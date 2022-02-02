const initialState = {
    UIList:[ { name: "Weight",isChecked:true, id:0 }],
    UDList:[ { name: "Weight",isChecked:true, id:0 },],
    selectedLanguage:"English"
}

const settingsUserDataReducer = (state = initialState,action)=>{
    console.log('>>>action.payload',action.payload)
    switch(action.type){
        case "SETTINGS_USER_Data":return action.payload;
        default: return state;
    }
}

export default settingsUserDataReducer;