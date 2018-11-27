import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import data from "./data";
import Item from "./components/Item";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./styles.css";

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dustin's Trinkets</h1>
          <div className="nav-Links">
            <Link to="/">Home</Link>
            <Link to="/Shop/">Shop</Link>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/Shop/" component={Shop} />
        <Route path="/item/:itemId" component={Item} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
