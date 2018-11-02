// From React.org homepage.
// NOT MY CODE

//React is a Javascript library (not a full framework) secifically built to create user interfaces.

// react Component:


class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                hello {this.props.name}
            </div>
        );
    }
}

ReactDom.render(
    <helloMessage name="Taylor" />,
    mountNode
);

// react component implements render() method/function.
// this is a fancy sytactical sugar for a print function.
// Output = Hello Taylor

// access the data with render() via this.props.

// Stateful Aspect of the Component:

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds:0};

    }

    tick() {
        this.setState(state =>({seconds: state.seconds +1}));
    }
    
    ComponentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWilUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}


ReactDom.render(<Timer />, mountNode);


// statefull components take in input data (via this.props), and maintains internat state data (via this.state).
// at a state change rendered markup is update by calling render(). (effectively reinvoking the method.).
//  output = 

// An Application:

// 
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[], text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.legnth +1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItems = { 
            text: this.state.text,
            id:  Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItems),
            text: ''

        }));
    }
}

class TodoList Extends react.Component {
    render(){
        return(
            <ul>
                {this.props.item.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

ReactDom.render(<TodoApp />, mountNode);
// we can use props and state to put together a new todolist app. 
// state is used to track the list of items, and the entered text.

// event handlers will be collected and implemented using delegated.
// 


// Also Components using External Plugins:
class MarkDownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: 'Hello, **world**!'};

    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    getRawMarkup() {
        const md = new Remarkable();
        return{ __html: md.render(this.state.value)};
    }

    render(){
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown

                </label>

                <textarea
                    id="markdown-content"
                    onChange={this.handleChange}
                    defauultValue={this.state.value
                    />
                <h3>output</h3>
                <div 
                    className="content"
                    dangerouslySetInnerHtml={this.getRawMarkup()}
                    />

                </div>
            
            
            </div>
        );
    }
}

ReactDom.render(<MarkdownEditor />, mountNode);


// is flexible and provides hooks that let you interface withother libraries and frameworks
// here remarkable was used. an external Markdown library.
// it converts the <textarea>'s value in real time.
    {/* NOT MY CODE, FROM REACT.ORG */}