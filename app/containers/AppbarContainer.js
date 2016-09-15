import {connect} from 'react-redux'
import Appbar from '../components/Appbar'
import {removeAllFile, upload} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.UploadReducer.files,
        selectedAlbum: state.UploadReducer.selectedAlbum,
        uploadedFiles: state.UploadReducer.uploadedFiles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: () => {
            dispatch(removeAllFile())
        },
        upload: (files, folder) => {
            upload(files, folder, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)