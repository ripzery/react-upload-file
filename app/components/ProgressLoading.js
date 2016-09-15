import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
    marginLeft16: {
        marginLeft: 16
    }
}

class ProgressLoading extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div >
                <CircularProgress size={1} />
            </div>
        )
    }
}

export default ProgressLoading