import {connect} from 'react-redux'
import Appbar from '../components/Appbar'

const mapStateToProps = (state) => {
    return {
        files: state.UploadReducer.files
    }
};

export default connect(mapStateToProps, null)(Appbar)