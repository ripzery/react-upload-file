import fetch from 'isomorphic-fetch'

export const selectedFiles = (files) => {
    return {
        type: 'SELECTED_FILE',
        files
    }
};

export const removeAllFile = () => {
    return {
        type: 'REMOVE_FILE',
        files: []
    }
};

export const init = () => {
    return {
        type: 'INIT',
        files: []
    }
}

export const fetchGalleryTypes = (url) => {
    fetch(url, {method: 'post'})
        .then((response) => response.json())
        .then((json) => console.log(json))
};