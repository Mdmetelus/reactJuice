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


// thisis the default prop that wll show if nothing is set to pass in yet.
Header.defaultProps = {
    branding: 'MyApp'
};

//proptype
Header.propType = {
    branding: PropTypes.string.isRequired
};
export default Header;