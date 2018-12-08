import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    continue = e => {
        e.preventdefault();
        //process Form, send it to the api like axois, or any other api
        this.props.nextStep();
    }

    back = e => {
        e.preventdefault();
        this.props.prevStep();
    }

  render() {
      
    return (

      <MuiThemeProvider>
          <>
          <h1>Success</h1>
          <h1>Thank You for your Submission</h1>
          <p>You will get an aemail with further instructions.</p>
          <h1>Hello from User Details</h1>
           
          </>
       
      </MuiThemeProvider>
    )
  }
}



export default Success;
