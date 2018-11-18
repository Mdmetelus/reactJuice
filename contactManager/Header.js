import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    // const branding = props;
    return (
        <div>
            <h1>{props.branding}</h1>
        </div>
    );
};

Header.defaultProps = {
    branding: 'MyApp'
};

Header.prototype = {
    branding: PropTypes.string.isRequired
};
export default Header;