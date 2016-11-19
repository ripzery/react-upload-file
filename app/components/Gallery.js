/**
 * Created by apple on 11/19/2016 AD.
 */
import React from 'react'
import {ReactRpg} from 'react-rpg';
import {lightBlack} from 'material-ui/styles/colors'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReactRpg imagesArray={this.props.gallery} columns={[1, 2, 2]} padding={0}/>
            </div>
        );
    }
}

export default Gallery;