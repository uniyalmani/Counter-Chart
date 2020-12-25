import React, { Component } from 'react';
class NavBar extends Component {
 
    render() { 
        return (  <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand badge-pill border" href="#">Counter Chart <span className="badge badge-pill badge-secoundary  border btn-dark">{this.props.totalCounters}</span></a>
        </div>
      </nav>);
    }
};
 
export default NavBar;