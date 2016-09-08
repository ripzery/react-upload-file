import {connect} from 'react-redux'
import Appbar from '../components/Appbar'
import {removeAllFile} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.UploadReducer.files
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: () => {
            dispatch(removeAllFile())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)