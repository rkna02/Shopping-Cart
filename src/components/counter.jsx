import React, { Component } from 'react'
import './counter.css'

/* Controller component: only relies on parent to pass props 
    does not rely on state */
class Counter extends Component {
    render() { 
        return (
            <div>
                <span className={this.getCounterClasses()}>{this.formatCount()}</span>
                {/* use arrow function for event handler with parameters */}
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}>
                    Delete
                </button>
                { /* this.renderTags() */}
                {/* this.state.tags.length === 0 && "There are no tags!" */}
            </div>
        );
    }

    getCounterClasses() {
        let className = "m-2 counter";
        className += (this.props.counter.value === 0 ? "-zero" : "");
        return className;
    }

    formatCount() {
        // Object Destructuring: make a new variable count and assign it to the first property in state
        const {value} = this.props.counter;   
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;