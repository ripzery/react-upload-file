import {connect} from 'react-redux'
import Album from '../components/Album'
import {loadAlbums} from '../actions/UploadFileAction';
import {selectedAlbum} from '../actions/UploadFileAction';

const mapStateToProps = (state) => {
    return {
        albums: state.UploadReducer.albums
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbums: loadAlbums(dispatch),
        selectedAlbum: (album) => dispatch(selectedAlbum(album))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Album)