import { combineReducers } from 'redux'

const UploadReducer = (state = [], action) => {
    switch(action.type){
        case 'SELECTED_FILE':
            return {
                files: action.files
            };
        case 'REMOVE_FILE':
            return {
                files: []
            };
        case 'INIT':
            return {
                files: []
            };
        default:
            return state
    }
};

export default combineReducers({UploadReducer})