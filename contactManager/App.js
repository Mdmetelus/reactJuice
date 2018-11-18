import React, {Component} from 'react';
import Contacts from './contact';
import Header from './Header';

class App extends Component {
    render() {
        return(
            <div className="App">
                <h1>The app Component</h1>
                
                <Header branding="Contact Manager" />

                <Contact name="John Doe"
                email="jdoe@gmail.com"
                phone="555-555-555" />

                <Contact name="Karen Doe"
                email="kdoe@gmail.com"
                phone="551-551-551" />
            </div>
        );
    }
}

export default App;