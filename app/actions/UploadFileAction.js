import fetch from 'isomorphic-fetch'

export const changePage = (pageIndex) => {
    return {
        type: 'CHANGE_PAGE',
        page: pageIndex
    }
};

export const openDrawer = () => {
    return {
        type: 'OPEN_DRAWER',
        open: true
    }
};

export const closeDrawer = () => {
    return {
        type: 'CLOSE_DRAWER',
        open: false
    }
};

export const selectedFiles = (upload, preview) => {
    return {
        type: 'SELECTED_FILE',
        files: {
            upload,
            preview
        }
    }
};

export const toggleFile = (upload, preview) => {
    return {
        type: "TOGGLE_FILE",
        files: {
            upload,
            preview
        }
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

export const upload = (files, folder, dispatch) => {
    let formData = new FormData();
    files.reduce((a, file) => formData.append("photos", file), files[0]);
    formData.append("folder", folder);

    console.log(files);

    fetch("https://api.ripzery.me/upload", {method: 'post', body: formData})
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
    fetch("https://api.ripzery.me/getTypes", {method: 'post'})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            dispatch({
                type: 'LOAD_ALBUM',
                albums: json.folders
            })
        })
};