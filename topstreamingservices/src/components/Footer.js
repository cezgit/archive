import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="pull-right">
                </div>
                <div className="centered">
                    <small>&copy; 2017 TopStreamingServices.com   All rights reserved. <NavLink to="/privacy"><span className="text-muted">Privacy Policy</span></NavLink></small>
                </div>
            </div>
        )
    }
}

export default Footer
