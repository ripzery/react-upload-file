import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Linker from './Linker'
import {fade} from 'material-ui/utils/colorManipulator'
import {teal500, green500, teal800} from 'material-ui/styles/colors'
import muiThemeable from 'material-ui/styles/muiThemeable';

/**
 * Created by apple on 11/18/2016 AD.
 */

class AppDrawer extends React.Component {
    constructor() {
        super();
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleLinkMouseOver = this.handleLinkMouseOver.bind(this);
        this.handleLinkMouseLeave = this.handleLinkMouseLeave.bind(this);
        this.state = {linkHover: false};
    }

    handleChangePage(event, value, index) {
        this.props.closeDrawer();
        this.props.changePage(index);
    }

    handleLinkMouseOver(e) {
        this.setState({linkHover: true})
    }

    handleLinkMouseLeave(e) {
        this.setState({linkHover: false})
    }

    render() {
        return (
            <Drawer
                docked={false}
                width={224}
                containerStyle={{backgroundColor: fade(teal500, 0.7)}}
                open={this.props.open}
                onRequestChange={(open) => this.props.closeDrawer()}>
                <div style={{height: "200px", textAlign: "center", lineHeight: "200px", backgroundColor: teal800}}>
                    <span style={{fontSize: "24px", verticalAlign:"middle", color:"white"}}>
                        <Linker url="https://blog.ripzery.me"
                                title="@Ripzery blog " />
                    </span>
                </div>
                <Menu onItemTouchTap={this.handleChangePage}>
                    <MenuItem primaryText={"Upload"}/>
                    <MenuItem>Gallery</MenuItem>
                </Menu>
                <div style={{position: "absolute", bottom: 0,width:"100%", marginBottom:16}}>
                    <Linker url="https://github.com/ripzery/react-upload-file/tree/develop" title="Go to Github" />
                    <br />
                    <br />
                    <Linker url="https://ripzery.me" title="ripzery.me © 2016" />
                </div>
            </Drawer>
        );
    }
}

export default muiThemeable()(AppDrawer)