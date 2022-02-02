const initialState = {
    UIList: [
        { name: "Weight", isChecked: true, id: 0 },
        { name: "BMI", isChecked: false, id: 1 },
        { name: "Muscle", isChecked: false, id: 2 },
        { name: "VC_Fat", isChecked: false, id: 3 },
        { name: "Fat", isChecked: false, id: 4 },
        { name: "Age", isChecked: false, id: 5 }],
    UDList: [
        { name: "Weight", isChecked: true, id: 0 },
        { name: "BMI", isChecked: false, id: 1 },
        { name: "Muscle", isChecked: false, id: 2 },
        { name: "VC_Fat", isChecked: false, id: 3 },
        { name: "Fat", isChecked: false, id: 4 },
        { name: "Age", isChecked: false, id: 5 }],
    selectedLanguage: "English"
}

const settingsUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SETTINGS_USER_Data": return action.payload;
        default: return state;
    }
}

export default settingsUserDataReducer;