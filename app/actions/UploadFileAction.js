import fetch from 'isomorphic-fetch'

export const selectedFiles = (upload, preview) => {
    return {
        type: 'SELECTED_FILE',
        files: {
            upload,
            preview
        }
    }
};

export const toggleFile = (files) => {
    return {
        type: "TOGGLE_FILE",
        files
    }
};

export const selectedAlbum = (album) => {
    console.log(album);
    return {
        type: 'SELECT_ALBUM',
        selectedAlbum: album
    }
};

export const removeAllFile = () => {
    return {
        type: 'REMOVE_FILE',
        files: {preview: [], upload: []}
    }
};

export const init = () => {
    return {
        files: {
            preview: [],
            upload: []
        },
        albums: [],
        uploadedFiles: []
    }
};

export const upload = (files, folder, dispatch) => {
    let formData = new FormData();
    files.reduce((a, file) => formData.append("photos", file), files[0]);
    formData.append("folder", folder);

    console.log(files);

    fetch("http://blog.ripzery.com:3000/photos/upload", {method: 'post', body: formData})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            dispatch({
                type: 'UPLOAD_FINISH',
                uploadedFiles: json.files
            });
            loadAlbums(dispatch)
        })
};

export const loadAlbums = (dispatch) => {
    fetch("http://blog.ripzery.com:3000/api2/getTypes", {method: 'post'})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            dispatch({
                type: 'LOAD_ALBUM',
                albums: json.folders
            })
        })
};