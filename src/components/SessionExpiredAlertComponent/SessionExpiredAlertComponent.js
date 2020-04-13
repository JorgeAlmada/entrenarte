import React, { Component } from 'react';
import './SessionExpiredAlertComponent.css';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
const Swal = require('sweetalert2');
const history = createBrowserHistory();

class SessionExpiredAlertComponent extends Component {
   constructor(props){
     super(props);
     this.state = {};
   }

  // componentWillMount(){}
  componentDidMount(){
    localStorage.setItem('firstname', "");
    localStorage.setItem('lastname', "");
    localStorage.setItem('email', "");
    localStorage.setItem('gender', "");
    localStorage.setItem('id', "");
    localStorage.setItem('usertype', "");
    localStorage.setItem('token', "");
    Swal.fire(
      'Cancelled',
      this.props.errorinfo,
      'error'
    ).then(function() {
      const location = {
        pathname: '/',
        state: { fromDashboard: true }
      }
      history.push(location);
      window.location.reload(false);
      return <Redirect to={location} push />
    })

  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div></div>
    );
  }
}

export default SessionExpiredAlertComponent;