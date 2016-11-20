import {connect} from 'react-redux'
import Gallery from '../components/Gallery'
import {loadPhotos, resetGallery} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        gallery: state.gallery,
        albums: state.albums
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPhotos: (album) => {
            loadPhotos(album, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)