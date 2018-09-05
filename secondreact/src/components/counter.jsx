import React, {Component} from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    /*    constructor(props) {
            // 建立构造器 ，绑定this
            super(props);
            // console.log('Constructor', this);
            this.handeleIncreMent = this.handeleIncreMent.bind(this);

        }*/

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    handeleIncreMent = (product) => {
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    doHandleIncrement = () => {
        this.handeleIncreMent({id: 1})
    };

    // deleteMent = () => {
    //     this.setState ({value: this.state.value - 1})
    // }


    render() {
        console.log("props", this.props);
        return (<div style={{margin: '10px'}}>
            {this.props.children}
            <span style={{fontSize: '10px', fontWeight: 'bold'}}
                  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/*<button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>*/}
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={ () => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
            {/*{this.state.tags.length === 0 && "please Create a new tag"}*/}
            {/*{ this.renderTags() }*/}
        </div>);
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badeg m-2 ";
        classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
        return classes;
    }
}

export default Counter;