import fetch from 'isomorphic-fetch'

export const selectedFiles = (files, previewFiles) => {
    return {
        type: 'SELECTED_FILE',
        files,
        previewFiles
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
        previewFiles: []
    }
}

export const upload = (url, files) => {
    let formData = new FormData();
    files.reduce((a, file) => formData.append("photos", file), files[0]);
    formData.append("folder", "custom");
    
    fetch(url, {method: 'post', body: formData})
        .then((response) => response.json())
        .then((json) => console.log(json))
};