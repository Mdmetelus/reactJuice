import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    // const branding = props;
    return (
        <div>
            <div>
                <a href="/" className="navBar-brand">{branding}</a>
            </div>
            <div>
                <ul>
                    <li><a href="/" className="//">Home</a></li>
                    <li><a href="/" className="//">About</a></li>
                    <li><a href="/" className="//">Github</a></li>
                    <li><a href="/" className="//">Contact</a></li>
                </ul>
            </div>
            <h1>{props.branding}</h1>
        </div>
    );
};


// thisis the default prop that wll show if nothing is set to pass in yet.
Header.defaultProps = {
    branding: 'MyApp'
};

//proptype
Header.propType = {
    branding: PropTypes.string.isRequired
};
export default Header;