import React, {component} from 'react';
import PropTypes from 'prop-types';
    state = {};

    onShowClick = e => {};

    render() {
        const {name,email,phone} =
        this.props.contact;

        return(
            <div classname="card card-body mb-3'">
                <h4>
                    {name}<i onClick={this.onShowClick}
                        classname="fas fas-sort-down" />
                </h4>
                <ul className="list-group">
                    <li className="list-group-item'>Email:{email}</li>
                    <li className="list-group-item'>Phone:{phone}</li>
                </ul>
            </div>
        
        )


