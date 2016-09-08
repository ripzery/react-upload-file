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
};