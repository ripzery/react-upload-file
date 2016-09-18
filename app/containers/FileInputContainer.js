import {connect} from 'react-redux'
import FileInput from '../components/FileInput'
import {toggleFile} from '../actions/UploadFileAction'
import {selectedFiles} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.files
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (files, newFiles) => dispatch(toggleFile(files, newFiles)),
        selectedFiles: (files, newFiles) => dispatch(selectedFiles(files, newFiles))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FileInput)