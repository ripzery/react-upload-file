import {connect} from 'react-redux'
import FileInput from '../components/FileInput'
import {toggleFile} from '../actions/UploadFileAction'
import {selectedFiles} from '../actions/UploadFileAction'
import {upload} from '../actions/UploadFileAction'
import {loadAlbums} from '../actions/UploadFileAction'
import {reset} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.files,
        waitingFiles: state.uploader.waitingFiles,
        folderToUpload: state.uploader.folderToUpload
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (files, newFiles) => dispatch(toggleFile(files, newFiles)),
        selectedFiles: (files, newFiles) => dispatch(selectedFiles(files, newFiles)),
        finishUpload: (files) => dispatch(upload(files)),
        loadAlbums: () => loadAlbums(dispatch),
        reset: () => dispatch(reset())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FileInput)