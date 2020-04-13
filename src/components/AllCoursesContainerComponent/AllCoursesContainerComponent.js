import React, { Component } from 'react';
import './AllCoursesContainerComponent.css';
import AllCoursesCatalogComponent from '../AllCoursesCatalogComponent';
import SidenavComponent from '../SidenavComponent/SidenavComponent';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import CoursePreviewComponent from '../CoursePreviewComponent/CoursePreviewComponent';
const Swal = require('sweetalert2');
const history = createBrowserHistory();

class AllCoursesContainerComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
      window : "courselist",
      course : [],
      loading : true
     };
     this.handleLogout = this.handleLogout.bind(this);
     this.courseSelected = this.courseSelected.bind(this);
     this.changeWindow = this.changeWindow.bind(this);
   }

   courseSelected(course) {
    this.setState({
      course : course,
      window : "coursepreview"
    })
   }

   changeWindow(window){
    this.setState({
      window
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
          <SidenavComponent></SidenavComponent>
          <div style = {{display : (this.state.window == "courselist" ? "block" : "none")}}>
            <AllCoursesCatalogComponent
            handleLogout = {this.handleLogout}
            courseSelected = {this.courseSelected}
            ></AllCoursesCatalogComponent>
          </div>
          <div style = {{display : (this.state.window == "coursepreview" ? "block" : "none")}}>
            <CoursePreviewComponent
            handleLogout = {this.handleLogout}
            selectedCourse = {this.state.course}
            changeWindow = {this.changeWindow}
            ></CoursePreviewComponent>
          </div>


      </div>
    );
  }
}

export default AllCoursesContainerComponent;