import React, { Component } from 'react'

 class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'john doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-5555'
                },
                {
                    id: 2,
                    name: 'Karen doe',
                    email: 'KKKKdoe@gmail.com',
                    phone: '515-515-5151'
                },
                {
                    id: 3,
                    name: 'Henry Johnson doe',
                    email: 'Ohenry@gmail.com',
                    phone: '414-154-1154'
                }
            ]
        }
    } 


  render() {
      const{ contacts } = this.state;
    return (
      <div>
          {contacts.map(contact => (
              <h1>{contact.name}</h1>
          ))}
        
      </div>
    )
  }
}


export default Contacts;