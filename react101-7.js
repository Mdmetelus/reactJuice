// React: Pass an Array as Props
// The last challenge demonstrated how to pass information from a parent component to a child component as props or properties. This challenge looks at how arrays can be passed as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

// <ParentComponent>
//   <ChildComponent colors={["green", "blue", "red"]} />
//   </ParentComponent>
// 
// 
colors = ['green', 'blue', 'red']

const ChildComponent = (props) =>{
    return(
        <p>{props.colors.join(', ')}</p>

    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h1>These ar colors i like to use:</h1>
                <ChildComponent colors
            </div>

        );
    }
};







