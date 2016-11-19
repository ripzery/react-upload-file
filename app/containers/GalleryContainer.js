import {connect} from 'react-redux'
import Gallery from '../components/Gallery'
import {removeAllFile, upload, openDrawer, loadPhotos} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        gallery: state.gallery
    }
};

export default connect(mapStateToProps, null)(Gallery)