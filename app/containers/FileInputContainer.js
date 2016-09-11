import {connect} from 'react-redux'
import FileInput from '../components/FileInput'

const mapStateToProps = (state) => {
    return {
        files: state.UploadReducer.files,
        previewFiles: state.UploadReducer.previewFiles
    }
};

export default connect(mapStateToProps, null)(FileInput)