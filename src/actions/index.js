//action types
export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"




//action creators
export const addNewFeature = item => {
    return {
        type: "ADD_NEW_FEATURE",
        payload: item
    }
}
export const removeFeature = item =>{
    return {
        type: "REMOVE_FEATURE",
        payload: item
    }
}