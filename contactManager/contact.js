import React, { Component } from 'react';

class Contact extends React.Component {
    state ={
        showContactInfo: true
    };

    static propTypes ={
        name: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        phone: propTypes.string.isRequired,
    };

    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
        console.log('HelloWorld. Ive been Clicked');
        console.log(e.target);

    };

    render() {
        // const { name, email, phone } = this.props;

        return(
            <div>
                <h4>{this.props.contact.name}<span onClick={this.onShowClick} >ClickMe(Down Arrow)</span></h4>
                <ul>
                    <li>Email: {this.props.contact.email}<span onClick={() => this.setState({showContactInfo: !this.state.ShowContactInfo})}>Click Here</span></li>
                    <li>Phone: {this.props.contact.phone}<span>click Here</span></li>
                </ul>
            </div>
        );
    }
}

// Contact.propTypes ={
//     name: propTypes.string.isRequired,
//     email: propTypes.string.isRequired,
//     phone: propTypes.string.isRequired,
// };

export default Contact;
