import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {fade} from 'material-ui/utils/colorManipulator'
import {teal500, green500, purple500} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable';

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
                width={224}
                containerStyle={{backgroundColor: fade(teal500, 0.7), h: 0}}
                open={this.props.open}
                onRequestChange={(open) => this.props.closeDrawer()}>
                <div style={{height: "200px", textAlign: "center"}}>
                    <span style={{fontSize: "24px"}}>Ripzery </span>
                </div>
                <Menu onItemTouchTap={this.handleChangePage}>
                    <MenuItem primaryText={"Upload"}/>
                    <MenuItem>Gallery</MenuItem>
                </Menu>
            </Drawer>
        );
    }
}

export default muiThemeable()(AppDrawer)