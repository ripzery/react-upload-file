import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class ProgressLoading extends React.Component {
    render(){
        return (
            <div>
                <CircularProgress size={2} />
            </div>
        )
    }
}

export default ProgressLoading