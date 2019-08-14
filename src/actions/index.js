//action types
export const ADD_NEW_FEATURE = "ADD_NEW_FEATURE"




//action creators
export const addNewFeature = item => {
    return {
        type: "ADD_NEW_FEATURE",
        payload: item
    }
}