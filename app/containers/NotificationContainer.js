import {connect} from 'react-redux'
import Notification from '../components/Notification'

const mapStateToProps = (state) => {
    return {
        uploadedFiles: state.uploadedFiles
    }
};

export default connect(mapStateToProps, null)(Notification)