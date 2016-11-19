/**
 * Created by ripzery on 11/19/16.
 */
import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class Linker extends React.Component {
    constructor() {
        super();
        this.state = {
            linkHover: false
        }
        this.handleLinkMouseLeave = this.handleLinkMouseLeave.bind(this);
        this.handleLinkMouseOver = this.handleLinkMouseOver.bind(this);
    }

    handleLinkMouseOver(e) {
        this.setState({linkHover: true})
    }

    handleLinkMouseLeave(e) {
        this.setState({linkHover: false})
    }

    render() {
        return (
            <a href={this.props.url}
               target="_blank"
               onMouseOver={this.handleLinkMouseOver}
               onMouseLeave={this.handleLinkMouseLeave}
               style={(this.state.linkHover) ? {color:this.props.mouseOverColor} : {color:this.props.mouseLeaveColor}}>{this.props.title}</a>
        )
    }
}

Linker.propTypes = {
    url: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    mouseOverColor: React.PropTypes.string,
    mouseLeaveColor: React.PropTypes.string
};

Linker.defaultProps = {
    mouseOverColor: "#ff0000",
    mouseLeaveColor: "white"
};

export default muiThemeable()(Linker);