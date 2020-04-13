import React, { Component } from 'react';
import './CoursesContainerComponent.css';
import SidenavComponent from '../SidenavComponent/SidenavComponent';
import CourseCatalogComponent from '../CourseCatalogComponent/CourseCatalogComponent';
import CourseDashboardComponent from '../CourseDashboardComponent/CourseDashboardComponent';
import CourseSectionLessonComponent from '../CourseSectionLessonComponent';
import ProfileNavbarComponent from '../ProfileNavbarComponent';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
const Swal = require('sweetalert2');
const history = createBrowserHistory();

class CoursesContainerComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       window : "courselist",
       course : [],
       section : [],
       loading : true
     };
     this.courseSelected = this.courseSelected.bind(this);
     this.sectionSelected = this.sectionSelected.bind(this);
     this.handleLogout = this.handleLogout.bind(this);
     this.changeWindow = this.changeWindow.bind(this);
   }

   changeWindow(window) {
    this.setState({
      window
    })
   }

   courseSelected(course) {
    this.setState({
      course : course,
      window : "coursedashboard"
    })
   }

   sectionSelected(section) {
    this.setState({
      section : section,
      window : "section"
    })
   }

   handleLogout() {
     console.log("LOGGING OUT!")
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
        <div style = {{display : (this.state.window == "section" ? "none" : "block")}}>
          <SidenavComponent></SidenavComponent>
        </div>
        <div style = {{display : (this.state.window == "courselist" ? "block" : "none")}}>
          <CourseCatalogComponent
          handleLogout = {this.handleLogout} 
          courseFunc = {this.courseSelected} 
          loading = {this.state.loading}
          ></CourseCatalogComponent>
        </div>
        <div style = {{display : (this.state.window == "coursedashboard" ? "block" : "none")}}>
          <CourseDashboardComponent 
          selectedCourse = {this.state.course} 
          sectionSelected = {this.sectionSelected}
          handleLogout = {this.handleLogout}
          changeWindow = {this.changeWindow}
          >
          </CourseDashboardComponent>
        </div>
        <div style = {{display : (this.state.window == "section" ? "block" : "none")}}>
          <CourseSectionLessonComponent 
          selectedSection = {this.state.section}
          changeWindow = {this.changeWindow}
          ></CourseSectionLessonComponent>
        </div>

      </div>
    );
  }
}

export default CoursesContainerComponent;