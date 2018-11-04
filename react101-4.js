// React: Compose React Components:

// As the challenges continue to use more complex compositions with React components and JSX, there is one important point to note. Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.
const NonCitrus = () => {
    return(
        <div>
            <h2>Non-Citrus:</h2>
            <ul>
                <li>Apples</li>
                <li>BlueBerries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );

};

const Citrus = () => {
    return(
        <div>
            <h2>Citrus:</h2>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Orange</li>
                <li>Grapefriut</li>
            </ul>
        </div>
    );

};

class Fruit extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h2>fruits:</h2>
                <NonCitrus />
                <Citrus />


            </div>
        );
    }

};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>types of Food:</h1>
                <Fruits />

                <Vegetables />
            </div>

        );
    }
}

// React: Render a Class Component to the DOM
// You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.
// Here's a refresher on the syntax: ReactDOM.render(componentToRender, targetNode). 
// The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.
//React components are passed into ReactDOM.render() a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example ReactDOM.render(<ComponentToRender />, targetNode). You use this syntax for both ES6 class components and functional components.

ReactDom.render(<TypesOfFood /> , document.getElementById('root'));

