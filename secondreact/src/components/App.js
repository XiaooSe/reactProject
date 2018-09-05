import React, { Component } from 'react';
import '../App.css';
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import RouterIndex from "./components/router";

class App extends Component {
    state = {
        counters: [
            { id:1, value: 1},
            { id:2, value: 2},
            { id:3, value: 3},
            { id:4, value: 4}
        ]
    };

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount() {
        // ajax call
       // this.setState({})
        console.log("ajax");
    }

    handleIncrement = counter => {
        console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState( {counters});

    }
    handleDelete = counterId => {
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        console.log('Event Handler Called', counterId);
        this.setState({ counters: newCounters})

    };

    handelReset = () => {
        const counters =  this.state.counters.map( c =>{
            c.value = 0;
            return c;
        });
        this.setState({ counters});

    }

    render() {
        console.log("App=render");
    return (
        <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value>0).length} />
        <main className="container">
          <Counters
              counters={this.state.counters}
              onReset={this.handelReset}
              onIncrement={this.handleIncrement}
              onDelete = {this.handleDelete}
          />
        </main>
        <RouterIndex />
        </React.Fragment>
    );
  }
}

export default App;
