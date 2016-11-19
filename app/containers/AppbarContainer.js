import {connect} from 'react-redux'
import Appbar from '../components/Appbar'
import {removeAllFile, upload, openDrawer} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.files,
        uploadedFiles: state.uploadedFiles,
        selectedAlbum: state.selectedAlbum,
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: () => {
            dispatch(removeAllFile())
        },
        upload: (files, folder) => {
            upload(files, folder, dispatch)
        },
        openDrawer: () => {
            dispatch(openDrawer())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)