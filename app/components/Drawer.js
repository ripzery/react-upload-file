import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
/**
 * Created by apple on 11/18/2016 AD.
 */

class AppDrawer extends React.Component {
    constructor() {
        super();
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangePage(event, value, index) {
        this.props.closeDrawer();
        this.props.changePage(index);
    }

    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
                onRequestChange={(open) => this.props.closeDrawer()}>
                <Menu onItemTouchTap={this.handleChangePage}>
                    <MenuItem>Upload</MenuItem>
                    <MenuItem>Gallery</MenuItem>
                </Menu>
            </Drawer>
        );
    }
}

export default AppDrawer