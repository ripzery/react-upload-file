import {connect} from 'react-redux'
import Appbar from '../components/Appbar'
import {removeAllFile, upload} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.files,
        uploadedFiles: state.uploadedFiles,
        selectedAlbum: state.selectedAlbum
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: () => {
            dispatch(removeAllFile())
        },
        upload: (files, folder) => {
            upload(files.upload, folder, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)