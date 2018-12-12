import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


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
          {/* <p>You will get an email with further instructions.</p> */}
          {/* <h1>Click Here To Enter LambdaNotes</h1> */}

          <RaisedButton 
                label="Lambda Notes"
                primary={true}
                // style={styles.button}
                // onClick={this.continue}
                />
                <br/>
           
          </>
       
      </MuiThemeProvider>
    )
  }
}



export default Success;
