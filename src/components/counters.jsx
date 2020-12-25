import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Counter from "./counter"
class Counters extends Component {
  
    render() { 
        return ( 
            <div>
                <button onClick = {this.props.onReset} className = 'btn btn-primary m-2'>Reset    </button>
              {this.props.counters.map(counter =>
                 <Counter
                  key = {counter.id} 
                  counter = {counter}
                   selected = {true} 
                   onDelete = {this.props.onDelete}
                   onIncrement = {this.props.onIncrement}
                   >
                  <h4>Counter #{counter.id}</h4>
              </Counter>)}
            </div>
         );
    }
}
 
export default Counters;