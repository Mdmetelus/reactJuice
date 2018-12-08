import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { RaisedButton } from 'material-ui';

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
                <br/>

                <TextField
                hintText="Enter Your Last Name"
                floatingLabelText= "Last Name"
                onChange={this.props.handleChange('lastName')}
                defaultValue= {values.lastName} />
                <br/>


                <TextField
                hintText="Enter Your Email"
                floatingLabelText= "Email"
                onChange={this.props.handleChange('email')}
                defaultValue= {values.email} />

                <br/>

                <RaisedButton 
                label="continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}/>
                <br/>
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
