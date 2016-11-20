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

export const upload = (files) => {
    return {
        type: 'UPLOAD_FINISH',
        uploadedFiles: files,
        waitingFiles: [],
        folderToUpload: []
    };
};

export const startUpload = (files, folder) => {
    return {
        type: 'UPLOAD_START',
        waitingFiles: files,
        folderToUpload: folder
    }
};

export const reset = () => {
    return {
        type: 'UPLOAD_RESET',
        waitingFiles: [],
        folderToUpload: null
    }
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

export const loadPhotos = (album, dispatch) => {
    console.log("Loading url : " + "https://api.ripzery.me/images?type=" + album);
    fetch("https://api.ripzery.me/images?type=" + album, {method: 'get'})
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            let concatePhotosUrl = json.images.map((photo, index) => ({url: "https://api.ripzery.me" + json.rootPath + photo.name}));
            dispatch({
                type: 'LOAD_PHOTOS',
                photos: concatePhotosUrl
            })
        })
};