import React, { Component } from 'react'
import MuiThemeProvider from 'matetial-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButtons from 'material-ui/RaisedButtons';
import { RaisedButton } from 'material-ui';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventdefault();
        this.props.nextStep();
    }

  render() {
      //destructuring
      const {values} = this.props;
    return (

      <MuiThemeProvider>
          <>
           <AppBar title="enter User Details"></AppBar>

            <TextField
                hintText="Enter Your First Name"
                floatingLabelText= "First Name"
                onChange={this.props.handleChange('firstName')}
                defaultValue= {values.firstName} />

                <TextField
                hintText="Enter Your Last Name"
                floatingLabelText= "Last Name"
                onChange={this.props.handleChange('lastName')}
                defaultValue= {values.lastName} />


                <TextField
                hintText="Enter Your Email"
                floatingLabelText= "Email"
                onChange={this.props.handleChange('email')}
                defaultValue= {values.email} />

                <br/>

                <RaisedButton 
                label="continue"
                primary={true}
                style={StyleSheet.button}
                onClick={this.continue}/>
          </>
        <h1>Hello from User Details</h1>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: { 
        margin:15
    }
}

export default FormUserDetails
