import React, { Component } from 'react';
class Counter extends Component {

    // constructor() {
    //     super();
    //    this.handleIncrement =  this.handleIncrement.bind(this);
    // }


    render() {
        return(<div>
        {this.props.children}
        <span  className = {this.getBadgeClasses()}> {this.formateCount()}</span>
        <button onClick = {() => {this.props.onIncrement(this.props.counter)}} className = "btn btn-secondary btn-sm ">Increment</button>
        <button onClick = {() => this.props.onDelete(this.props.counter.id ) } className = "btn btn-danger btn-sm m-2">Delete</button>
        </div>
        );
    }
    getBadgeClasses(){
        let classes = "badge m-3 ";
        classes += (this.props.counter.value===0)?"badge-warning":"badge-primary";
        return classes;
    }
    formateCount(){
        const {value} = this.props.counter;
        return value ===0 ? "zero": value;
    }
}
 
export default Counter;