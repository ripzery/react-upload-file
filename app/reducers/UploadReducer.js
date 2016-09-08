import { combineReducers } from 'redux'

const UploadReducer = (state, action) => {
    switch(action.type){
        case 'SELECTED_FILE':
            return {
                ...action
            };
        case 'REMOVE_FILE':
            return {
                files: []
            };
            return;
        default:
            return state
    }
};

export default combineReducers(UploadReducer)