import fetch from 'isomorphic-fetch'

export const selectedFiles = (files, previewFiles) => {
    return {
        type: 'SELECTED_FILE',
        files,
        previewFiles
    }
};

export const selectedAlbum = (album) => {
    return {
        type: 'SELECTED_ALBUM',
        selectedAlbum: album
    }
};

export const removeAllFile = () => {
    return {
        type: 'REMOVE_FILE',
        files: [],
        previewFiles: []
    }
};

export const init = () => {
    return {
        type: 'INIT',
        files: [],
        previewFiles: [],
        albums: []
    }
};

export const upload = (files, folder, dispatch) => {
    let formData = new FormData();
    files.reduce((a, file) => formData.append("photos", file), files[0]);
    formData.append("folder", folder);

    fetch("http://localhost:3000/photos/upload", {method: 'post', body: formData})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            dispatch({
                type: 'UPLOAD_FINISH',
                uploadedFiles: json.files
            })
        })
};

export const loadAlbums = (dispatch) => {
    fetch("http://localhost:3000/photos/getTypes", {method: 'post'})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            dispatch({
                type: 'LOAD_ALBUM',
                albums: json.folders
            })
        })
};