import React, { Component } from 'react';

class SecondaryNav extends Component {
    render() {
        return (
            <div className="d-none d-xl-block col-xl-2 fd-toc">
                <ul id="scrollNav" className="fd-toc-section-nav">
                    <li className="fd-toc-entry active">
                        <a href="#quick-start">Quick start</a>
                        <ul>
                            <li className="fd-toc-entry"><a href="#css">CSS</a></li>
                            <li className="fd-toc-entry"><a href="#js">JS</a></li>
                        </ul>
                    </li>
                    <li className="fd-toc-entry"><a href="#starter-template">Starter template</a></li>
                    <li className="fd-toc-entry">
                        <a href="#important-globals">Important globals</a>
                        <ul>
                            <li className="fd-toc-entry"><a href="#html5-doctype">HTML5 doctype</a></li>
                            <li className="fd-toc-entry"><a href="#responsive-meta-tag">Responsive meta tag</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SecondaryNav;