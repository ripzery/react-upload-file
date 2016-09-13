import { combineReducers } from 'redux'

const UploadReducer = (state = [], action) => {
    switch(action.type){
        case 'SELECTED_FILE':
            return {
                ...state,
                ...action
            };
        case 'SELECTED_ALBUM':
            return {
                ...state,
                ...action
            };
        case 'REMOVE_FILE':
            return {
                ...state,
                ...action
            };
        case 'INIT':
            return {
                ...action
            };
        case 'LOAD_ALBUM':
            return {
                ...state,
                ...action
            };
        default:
            return state
    }
};

export default combineReducers({UploadReducer})