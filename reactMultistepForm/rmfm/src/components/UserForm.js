

import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio:''

    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step:step + 1 
        });
    }

    // back one step
    prevStep = () => {
        const {step} = this.state;
        this.setState({ step: step -1 });
    }

    //handle feild change
    handleChange = input => {
        this.setState({ [input]: else.target.value });
    }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
