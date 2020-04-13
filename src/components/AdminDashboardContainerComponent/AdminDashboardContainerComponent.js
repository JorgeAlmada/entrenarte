import React, { Component } from 'react';
import './AdminDashboardContainerComponent.css';
import avatar from '../../assets/images/avatures/avature-2.png'
import avatar2 from "../../assets/images/avatures/avature-2.png";
import AdminCourseContainerComponent from '../AdminCourseContainerComponent/AdminCourseContainerComponent';
import AdminDashboardComponent from '../AdminDashboardComponent/AdminDashboardComponent';
import AdminDashboardEditoComponent from '../AdminDashboardEditoComponent/AdminDashboardEditoComponent';
import SessionExpiredAlertComponent from '../SessionExpiredAlertComponent/SessionExpiredAlertComponent';
import StudentsModalComponent from '../StudentsModalComponent/StudentsModalComponent';

import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
const Swal = require('sweetalert2');
const history = createBrowserHistory();

class AdminDashboardContainerComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       window : "mainpage",
       firstname: "",
       lastname: "",
       usertype: "",
       img: ""
     };
     this.updateProfile = this.updateProfile.bind(this);
   }

  // componentWillMount(){}
  componentDidMount(){
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const usertype = localStorage.getItem('usertype');
    const img = localStorage.getItem('img');
    console.log(usertype)
    this.setState({
      firstname : firstname,
      lastname: lastname,
      usertype: usertype,
      img : 'http://localhost:8000/' + img
    })
  }

  updateProfile(respuesta){
    localStorage.setItem('firstname', respuesta.firstname)
    localStorage.setItem('lastname', respuesta.lastname)
    localStorage.setItem('email', respuesta.email)
    localStorage.setItem('img', respuesta.img)
    this.setState({
      firstname: respuesta.firstname,
      lastname: respuesta.lastname,
      img: 'http://localhost:8000/' + respuesta.img
    })
  }

  handleLogout() {
    localStorage.setItem('firstname', "");
    localStorage.setItem('lastname', "");
    localStorage.setItem('email', "");
    localStorage.setItem('gender', "");
    localStorage.setItem('id', "");
    localStorage.setItem('usertype', "");
    localStorage.setItem('token', "");
    localStorage.setItem('img', "");
    Swal.fire(
      'Success',
      'Sesión terminada correctamente.',
      'success'
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
      <div>
              <div className="admin-side" id="admin-side"> 
      <a href="allcourses" className="admin-logo"><i className="fas fa-graduation-cap" /> CoursePlus</a> 
      <ul data-simplebar> 
        <li> 
          <a onClick={() =>  this.setState({window: "mainpage"})}> <i className="fas fa-user" /> Dashboard</a>
        </li>                          
        <li style={{display : this.state.usertype !== "0" ? "block" : "none"}}> 
          <a onClick={() =>  this.setState({window: "coursespage"})}> <i className="fas fa-play" /> Courses  </a>
        </li>                 
        <li> 
          <a onClick={() =>  this.setState({window: "editpage"})}> <i className="fas fa-user" /> edit profile  </a>
        </li>                                             
      </ul>             
    </div>               
    <div className="admin-mobile-headder uk-hidden@m"> 
      <span uk-toggle="target: #admin-side; cls: admin-side-active" className="uk-padding-small uk-text-white uk-float-right"><i className="fas fa-bars" /></span> 
      <a className="uk-logo" href="index.html"> <i className="fas fa-graduation-cap"> </i> CoursePlus </a> 
    </div>         
    {/* main contant */}         
    <div className="admin-content"> 
    <nav className="uk-navbar">        
              {/* right navbar  */}                 
              <div className="uk-navbar-right"> 
                {/* User profile */}                     
                <a href="#"> 
                  <img src={this.state.img} alt="" className="uk-border-circle user-profile-tiny" /> 
                </a>                     
                <div uk-dropdown="pos: top-right ;mode : click ;animation: uk-animation-slide-bottom-small" className="uk-dropdown uk-padding-small angle-top-right uk-dropdown-bottom-right"> 
                  <p className="uk-margin-remove-bottom uk-margin-small-top uk-text-bold"> {this.state.firstname + " " + this.state.lastname}</p>                                          
                  <ul className="uk-nav uk-dropdown-nav"> 
                    <li> 
                      <a onClick={() =>  this.setState({window: "editpage"})}> <i className="fas fa-user uk-margin-small-right" /> Profile</a> 
                    </li>                                                                                  
                    <li className="uk-nav-divider" />                                             
                    <li> 
                      <a onClick={() => this.handleLogout()}> <i className="fas fa-sign-out-alt uk-margin-small-right" /> Log out</a> 
                    </li>                                             
                  </ul>                                         
                </div>                    
              </div>                 
            </nav>       
      </div>
        <div style={{display: this.state.window == "coursespage" ? "block" : "none"}}>
          <AdminCourseContainerComponent></AdminCourseContainerComponent>
        </div>
        <div style={{display: this.state.window == "mainpage" ? "block" : "none"}}>
          <AdminDashboardComponent></AdminDashboardComponent>
        </div>
        <div style={{display: this.state.window == "editpage" ? "block" : "none"}}>
          <AdminDashboardEditoComponent
          updateProfile = {this.updateProfile}
          profileimg = {this.state.img}
          ></AdminDashboardEditoComponent>>
        </div>
      </div>
    );
  }
}

export default AdminDashboardContainerComponent;