import {connect} from 'react-redux'
import Appbar from '../components/Appbar'
import {removeAllFile, upload, openDrawer, loadPhotos} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        files: state.files,
        uploadedFiles: state.uploadedFiles,
        selectedAlbum: state.selectedAlbum,
        albums: state.albums,
        page: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeAll: () => {
            dispatch(removeAllFile())
        },
        upload: (files, folder) => {
            upload(files, folder, dispatch)
        },
        openDrawer: () => {
            dispatch(openDrawer())
        },
        loadPhotos: (album) => {
            loadPhotos(album, dispatch)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Appbar)