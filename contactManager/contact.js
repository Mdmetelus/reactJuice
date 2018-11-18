import React, { Component } from 'react';

class Contact extends React.Component {
    render() {
        // const { name, email, phone } = this.props;

        return(
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    <li>Email: {this.props.email}</li>
                    <li>Phone: {this.props.phone}</li>
                </ul>
            </div>
        );
    }
}

export default Contact;