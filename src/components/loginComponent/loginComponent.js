import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router'
import NewComponent from '../NewComponent';
require('../../assets/css/main.css');
require('../../assets/css/uikit.css');
require('../../assets/css/fontawesome.css');
require('../../assets/js/simplebar.js');
require('../../assets/js/uikit.js');
const axios = require('axios');
const Swal = require('sweetalert2');
const history = createBrowserHistory();


    // Listen for clicks in the document

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      gender: '',
      password: ''  
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const body = this.state;
    event.preventDefault();
    axios.post('http://localhost:8000/user/register', {
      params:{
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        gender: body.gender,
        usertype: 0
      },
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      console.log(response.data[0]);
      Swal.fire(
        'Success',
        'Your account has been created',
        'success'
      )
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
    .finally(function () {
      // always executed
    });  
  }

  handleLogin(event) {
    const body = this.state;
    event.preventDefault();
    axios.post('http://localhost:8000/user/login', {
      params:{
        email: body.email,
        password: body.password
      },
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(function (response) {
      var respuesta = response.data[0];
      console.log(respuesta)
      localStorage.setItem('firstname', respuesta.firstname);
      localStorage.setItem('lastname', respuesta.lastname);
      localStorage.setItem('email', respuesta.email);
      localStorage.setItem('gender', respuesta.gender);
      localStorage.setItem('id', respuesta.id);
      localStorage.setItem('usertype', respuesta.usertype);
      localStorage.setItem('img', respuesta.img);
      localStorage.setItem('token', respuesta.token);

      Swal.fire(
        'Success',
        'Successful login',
        'success'
      ).then(function() {
        if(respuesta.usertype == 0){
          const location = {
            pathname: '/coursepage',
            state: { fromDashboard: true }
          }
          history.push(location);
          window.location.reload(false);
          return <Redirect to={location} push />
        } else{
          const location = {
            pathname: '/admindashboard',
            state: { fromDashboard: true }
          }
          history.push(location);
          window.location.reload(false);
          return <Redirect to={location} push />
        }
      })
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
    .finally(function () {
      // always executed
    });  
  }


  render() {

    document.addEventListener('click', function (event) {

			// Check if a password selector was clicked
			var selector = event.target.getAttribute('data-show-pw');
			if (!selector) return;

			// Get the passwords
			var passwords = document.querySelectorAll(selector);

			// Toggle visibility
			Array.from(passwords).forEach(function (password) {
				if (event.target.checked === true) {
					password.type = 'text';
				} else {
					password.type = 'password';
				}
			});
    }, false);
    
    return <div>
      <div>

        <div uk-height-viewport="offset-top: true; offset-bottom: true" className="uk-flex uk-flex-middle">
          <div className="uk-width-1-3@m uk-width-1-2@s uk-margin-auto">
            <div className="uk-card-default uk-padding uk-card-small border-radius-6">
              {/* Login tab */}
              <div id="login" className="tabcontent tab-default-open animation: uk-animation-slide-right-medium"> 
              <form onSubmit={this.handleLogin}>
                <h2 className="uk-text-bold"> Log in </h2>
                <p className="uk-text-muted uk-margin-remove-top uk-margin-small-bottom"> Fill blank to log your account</p>
                <div className="uk-form-label"> Email address </div>
                <div className="uk-inline">
                  <span className="uk-form-icon"><i className="far fa-User icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" placeholder="name@example.com" type="text" required name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="uk-flex-middle" uk-grid>
                  <div className="uk-width-expand@m uk-margin-small-bottom">    
                    <div className="uk-form-label">Password</div>                                 
                  </div>
                  <div className="uk-width-auto@m">
                    <a href="#" className="tablinks uk-text-small " onClick={(e) => window.openTabs(e, 'forget')}> Lost password? </a> 
                  </div>
                </div> 
                <div className="uk-inline uk-margin-small-bottom">
                  <span className="uk-form-icon"><i className="fas fa-key icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" name="password" id="password" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div>
                  <label>
                    <input className="uk-checkbox" type="checkbox" data-show-pw="#password" /> 
                    <span className="checkmark uk-text-small"> Show password</span> 
                  </label>     
                </div>
                <div className="uk-margin uk-text-small"> 
                  Not registered?                                         
                  <a href="#" className="tablinks uk-text-bold" onClick={(e) => window.openTabs(e, 'register')} > Create account</a> 
                </div>
                <div className=" uk-flex-middle" uk-grid>
                  <div className="uk-width-expand@m">  
                    <input className="uk-button uk-button-success" type="submit" defaultValue="Sign in" />                                  
                  </div>
                  <div className="uk-width-auto@m uk-position-relative">
                    <a className="uk-icon-button uk-button-primary uk-position-center-right" href="#" uk-tooltip="title: Log in with your Facebook ; delay: 500 ; pos: top-right ;animation:uk-animation-scale-up"> <i className="fab fa-Facebook icon-small" /></a>
                    <a className="uk-icon-button uk-button-danger uk-position-center-right uk-margin-medium-right " href="#" uk-tooltip="title: Log in with your Google  ; delay: 500 ; pos: top-right ;animation:	uk-animation-scale-up"> <i className="fab fa-google icon-small" /> </a>
                  </div>
                </div>  
                </form>
              </div>
              {/* register tab */}
              <div id="register" className="tabcontent animation: uk-animation-slide-left-medium"> 
                <h2 className="uk-text-bold"> Register </h2>
                <p className="uk-text-muted uk-margin-remove-top uk-margin-small-bottom"> Create your free account</p>
                <form onSubmit={this.handleSubmit}>
                <div className="uk-form-label">First name</div>
                <div className="uk-inline">
                  <span className="uk-form-icon"><i className="far fa-User icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" placeholder="First name" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                </div>
                <div className="uk-form-label">Last name</div>
                <div className="uk-inline">
                  <span className="uk-form-icon"><i className="far fa-User icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" placeholder="First name" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                </div>
                <div className="uk-form-label">Email address</div>
                <div className="uk-inline">
                  <span className="uk-form-icon"><i className="far fa-envelope icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" placeholder="name@example.com" type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className="uk-form-label">Gender</div>
                <div className="uk-inline">
                  <span className="uk-form-icon"><i className="far fa-User icon-medium" /></span> 
                  <input className="uk-input uk-form-width-large" placeholder="Gender" type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />
                </div>                      
                <div className="uk-margin"> 
                  <label> 
                    <input className="uk-checkbox" type="checkbox" defaultChecked /> 
                    <span className="checkmark uk-text-small"> I agree to the </span>
                    <a href="#modal-overflow" className="uk-text-bold uk-text-small" uk-toggle> Terms and Conditions</a> 
                  </label>  
                </div> 
                <div className=" uk-flex-middle" uk-grid>
                  <div className="uk-width-expand@m">     
                    <input className="uk-button uk-button-success" type="submit" defaultValue="Create" />                                      
                  </div>
                  
                  <div className="uk-width-auto@m">
                    <span className="uk-text-small"> Already registered? <a href="#" className="tablinks uk-text-bold" onClick={(e) => window.openTabs(e, 'login')}> Sign in </a></span>
                  </div>
                </div>    
                </form>                            
              </div> 
              {/* forget tab */}
              <div id="forget" className="tabcontent animation: uk-animation-slide-bottom-medium"> 
                <h2 className="uk-text-bold"> Forget password</h2>
                <p className="uk-text-muted uk-margin-remove-top uk-margin-small-bottom">to reset your password fill inter your email</p>
                <div>
                  <div className="uk-form-label">Email address</div>
                  <div className="uk-inline">
                    <span className="uk-form-icon"><i className="fas fa-lock icon-medium" /></span> 
                    <input className="uk-input uk-form-width-large" placeholder="name@example.com" type="text" />
                  </div>
                </div>
                <div className="uk-margin">  
                  <input className="uk-button uk-button-success" type="submit" defaultValue="Reset password" /> 
                </div>
                <span className="uk-text-small">
                  Not registered?  
                  <a href="#" className="tablinks uk-text-bold" onClick={(e) => window.openTabs(e, 'register')}> Create</a>
                  Or
                  <a href="#" className="tablinks uk-text-bold" onClick={(e) => window.openTabs(e, 'register')}> Sign in</a> 
                </span>
              </div>
            </div> 
          </div>
        </div>
        {/* Terms model*/} {/*
        <div id="modal-overflow" uk-modal> 
          <div className="uk-modal-dialog"> 
            <button className="uk-modal-close-default uk-margin-small-top uk-margin-small-right" type="button" uk-close />
            <div className="uk-modal-header">
              <b className="uk-text-medium"> Terms</b> 
            </div> 
            <div className="uk-modal-body" uk-overflow-auto> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
            </div> 
            <div className="uk-modal-footer uk-text-right"> 
              <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button> 
              <button className="uk-button uk-button-primary" type="button">I Agree </button> 
            </div> 
          </div>
        </div>*/}
      </div>
    </div>;
  }
}


export default LoginComponent;