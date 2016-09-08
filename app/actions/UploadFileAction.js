export const selectedAllFile = (files) => {
    return {
        type: 'SELECTED_FILE',
        files
    }
};

export const removeAllFile = (files) => {
    return {
        type: 'REMOVE_FILE',
        files
    }
};