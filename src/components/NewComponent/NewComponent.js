import React, { Component } from 'react';
import './NewComponent.css';

class NewComponent extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <p>{this.props.texto}</p>
      </div>
    );
  }
}

export default NewComponent;