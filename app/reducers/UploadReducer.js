import {combineReducers} from 'redux'

/* state is contain only uploadedFiles array-property */
const uploadedFiles = (state = [], action) => {
    switch (action.type) {
        case "UPLOAD_FINISH":
            return action.uploadedFiles;
        default:
            return state
    }
};

const files = (state = {preview: [], upload: []}, action) => {
    switch (action.type) {
        case "SELECTED_FILE":
            return {
                ...state,
                ...action.files
            };
        case "TOGGLE_FILE":
            /* TODO: refactor logic */
            return {
                ...state,
                ...action.files
            };
        case "REMOVE_FILE":
            return {
                preview: [],
                upload: []
            };
        default :
            return state
    }
};

const selectedAlbum = (state = "", action) => {
    switch (action.type) {
        case "SELECT_ALBUM":
            return action.selectedAlbum;
        default :
            return state
    }
};

const albums = (state = [], action) => {
    switch (action.type) {
        case "LOAD_ALBUM":
            return action.albums;
        default:
            return state
    }
};

export default combineReducers({uploadedFiles, files, selectedAlbum, albums})