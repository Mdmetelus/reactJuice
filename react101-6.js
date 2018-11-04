// React: Pass Props to a Stateless Functional Component
// The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: props. In React, you can pass props, or properties, to child components. Say you have an App component which renders a child component called Welcome that is a stateless functional component. You can pass Welcome a user property by writing:

const CurrentDate= (props) => {
    return(
        <div>
            <p>The Current Date is: {props.date}</p>
        </div>
    );
};

class Calender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()} />
            </div>
        );
    }
};
ReactDOM.render(<Calender />, document.getElementById('root'));


const Welcome = (props) => {
    return(
        <div>
            <p>Hello, {Props.user}, How are you today?</p>
        </div>

    );
};

class Greeting extends React.Component {
    constuctor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>This is how you greet someone new?</h2>
                <Welcome user ={Max}/>
            </div>
        );
    }
}
ReactDOM.render(<Greeting />, document.getElementById('root'));











