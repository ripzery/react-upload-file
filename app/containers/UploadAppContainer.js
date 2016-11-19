import {connect} from 'react-redux'
import UploadApp from '../components/UploadApp'
import {changePage} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
};

export default connect(mapStateToProps, null)(UploadApp)