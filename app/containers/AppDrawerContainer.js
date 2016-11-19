import {connect} from 'react-redux'
import AppDrawer from '../components/Drawer'
import {changePage, closeDrawer} from '../actions/UploadFileAction'

const mapStateToProps = (state) => {
    return {
        page: state.page,
        open: state.drawer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (page) => {
            dispatch(changePage(page))
        },
        closeDrawer: () => {
            dispatch(closeDrawer())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)