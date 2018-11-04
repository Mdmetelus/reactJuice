const JSX = <h1>Hello JSX!</h1>;

const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);


const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/*This is a JSX commment*/}
  </div>
);

ReactDOM.render(componentToRender, targetNode),
ReactDOM.render(JSX, document.getElementById('root'))


const JSX = (
  <div id='challenge-node'>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX,document.getElementById('challenge-node'))

const JSX = (
  <div className="myDiv" >
    <h1>Add a class to this div</h1>
  </div>
);

const BasicComponent = () => <h1>Hello World</h1>;

// Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.


const JSX = (
  <div>
    {/* remove comment and change code below this line*/}
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
    {/*remove comment and change code above this line */}
  </div >
);

// React: Create a Stateless Functional Component

// The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

// Note: The text is considered a child of the div element, so you will not be able to use a self-closing tag.
const MyComponent = function() {
  // change code below this line
  return(<div>'string of text'</div>
  );

  // change code above this line
}





// ReactDom.render(document.getElementById('#ab'));


// React: Create a React Component

// MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.


class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

class Doggy extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <h1>WOFF WOOFF! Said the doggy.</h1>
        )
    }
};


class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
      return(
        <div>
          <h1>Hello React!</h1>
        </div>
      );
      
      // change code above this line
    }
  };
  
  class MaxConponent extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return(
              <div>
                  <h1>Try this again to practice the syntax.</h1>

              </div>
          )
      }
  };



// React: Create a Component with Composition
// Now we will look at how we can compose multiple React components together. Imagine you are building an App and have created three components, a Navbar, Dashboard, and Footer.

// To compose these components together, you could create an App parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the render method you could write:

// return (
// <App>
//   <Navbar />
//   <Dashboard />
//   <Footer />
// </App>
// )
// it renders the markup for that component in the location of the tag. 

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }
          <ChildComponent />
  
         
          { /* change code above this line */ }
        </div>
      );
    }
  };



  const BabyComponent = ( ) => {
      return (
          <div>
              <p> This is the Baby Component !!</p>
          </div>
      );
  };


  class ParentComponent2 extents React.Component {
      constuctor(props) {
          super(props);
      }
      render() {
          return(
              <div>
                  <h1>This is the Parrent Component</h1>
                  <BabyComponent />

                  <BabyComponent />
              </div>
          );
      }
  };


  const LittleComponent = () => {
      return(
          <div>
              <h2>thiss is the little Internal Element.</h2>
              <p>details here</p>
              <p>more details here</p>
          </div>
      );
  };

  Class BigComponent extents React.Component{
      constructor(props) {
          super(props);
      }
      render() {
          return(
              <div>
                  <h1>This is the Big Component!</h1>
                  <p>Details</p>
                  <p>More Details</p>
                  <LittleComponent />

              </div>

          );
      }
  };

const TennisBall = () => {
    return(
        <div>
            <h3>TennisBall</h3>
            <p>Baseball</p>
            <p>Racketball</p>
        </div>
    );
};

class Basketball extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Basketball</h1>
                <h2>Soccerball</h2>
                <p>Football</p>
                <TennisBall />
            </div>
        );
    }
};





//   React: Use React to Render Nested Components
// The last challenge showed a simple way to compose two components, but there are many different ways you can compose components with React.

// Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components.

// There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and compose it, or nest it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit />
  
        { /* change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
           <Fruits />
  
          { /* change code above this line */ }
        </div>
      );
    }
  };

// ************************************************


const TypesOfFruits = () => {
    return(
        <div>
            <h2> Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>BlueBerries</li>
                <li>Straw...</li>
                <li>Bananas</li>
            </ul>
        </div>
    );

};
const TypesOfVeggies = () => {
    return(
        <div>
            <h2> Veggies:</h2>
            <ul>
                <li>Kale</li>
                <li>Broccolli</li>
                <li>Spinich</li>
                <li>Eggplant</li>
            </ul>
        </div>
    );

};
const TypesOfMeats = () => {
    return(
        <div>
            <h2> Meats</h2>
            <ul>
                <li>chicken</li>
                <li>Turkey</li>
                <li>Beef</li>
                <li>Lamb</li>
            </ul>
        </div>
    );

};


const FruitsAnVeggies = () => {
    return(
        <div>
            <TypesOfFruits />
            <TypesOfVeggies />

        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Types of Food:</h1>
                <FruitsAnVeggies />
                <TypesOfMeats />
            </div>

        );
    }
};

