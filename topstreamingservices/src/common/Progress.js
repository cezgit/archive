import React from 'react';
import pace from '../plugins/pace/pace';

class Progress extends React.Component {
    componentDidMount() {
        pace.start();
    }

    render() {
        return (null)
    }
}

export default Progress
