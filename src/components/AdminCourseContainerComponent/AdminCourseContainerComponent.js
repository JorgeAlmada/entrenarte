import React, { Component } from 'react';
import CreateCourseComponent from '../CreateCourseComponent';
import './AdminCourseContainerComponent.css';
import CreateCourseFormComponent from '../CreateCourseFormComponent/CreateCourseFormComponent';
import CreateSectionComponent from '../CreateSectionComponent/CreateSectionComponent';
import CreateLessonComponent from '../CreateLessonComponent';
import StudentsModalComponent from '../StudentsModalComponent';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
const axios = require('axios');
const Swal = require('sweetalert2');
const history = createBrowserHistory();

class AdminCourseContainerComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       courses: [],
       window : "courselist",
       selectedcourse : 0,
       selectedsection: 0,
       courseposition: 0,
       sectionposition: 0,
       coursetoedit : {},
       sectiontoedit : {},
       lessontoedit: {},
       showmodal : false,
       courseformodal: 0
     };
     this.createCourse = this.createCourse.bind(this);
     this.createSection = this.createSection.bind(this);
     this.createLesson = this.createLesson.bind(this);
     this.courseCreatedSuccess = this.courseCreatedSuccess.bind(this);
     this.courseUpdatedSuccess = this.courseUpdatedSuccess.bind(this);
     this.sectionCreatedSuccess = this.sectionCreatedSuccess.bind(this);
     this.sectionUpdatedSuccess = this.sectionUpdatedSuccess.bind(this);
     this.lessonCreatedSuccess = this.lessonCreatedSuccess.bind(this);
     this.lessonUpdatedSuccess = this.lessonUpdatedSuccess.bind(this);
     this.deleteCourse = this.deleteCourse.bind(this);
     this.deleteSection = this.deleteSection.bind(this);
     this.deleteLesson = this.deleteLesson.bind(this);
     this.hideModal = this.hideModal.bind(this);
     this.modalDisplay = this.modalDisplay.bind(this);
   }

   modalDisplay(courseformodal) {
     this.setState({
       showmodal: true,
       courseformodal: courseformodal
     })
   }

   hideModal() {
     this.setState({
       showmodal: false
     })
   }

   createCourse(coursetoedit) {
     this.setState({
       window : "createcourse",
       coursetoedit : coursetoedit
     })
   }

   courseCreatedSuccess(newcourse) {
     console.log(newcourse)
     var newStateArray = this.state.courses.slice();
     newStateArray.push(newcourse);
     this.setState({
       courses : newStateArray,
       window : "courselist",
       coursetoedit : {}
     })
   }

   courseUpdatedSuccess(courseupdatedinfo) {
    var newStateArray = this.state.courses.slice();
    var objIndex = newStateArray.findIndex((obj => obj.id == courseupdatedinfo.id));
    newStateArray[objIndex].name = courseupdatedinfo.name;
    newStateArray[objIndex].description = courseupdatedinfo.description;
    newStateArray[objIndex].about = courseupdatedinfo.about;
    newStateArray[objIndex].img = courseupdatedinfo.img;
    newStateArray[objIndex].private = courseupdatedinfo.private;
    newStateArray[objIndex].video = courseupdatedinfo.video;
    this.setState({
      courses : newStateArray,
      window : "courselist",
      coursetoedit : {}
    })
  }

   sectionCreatedSuccess(newsection, position) {
    var newStateArray = this.state.courses.slice();
    if(!newStateArray[position].sections){
      newStateArray[position].sections = [];
    }
    newStateArray[position].sections.push(newsection);
    this.setState({
      courses : newStateArray,
      window : "courselist",
      sectiontoedit : {}
    })
   }

   sectionUpdatedSuccess(sectionupdated, position){
    var newStateArray = this.state.courses.slice();
    var objIndex = newStateArray[position].sections.findIndex((obj => obj.id == sectionupdated.id));
    newStateArray[position].sections[objIndex].name = sectionupdated.name;
    newStateArray[position].sections[objIndex].img = sectionupdated.img;
    this.setState({
      courses : newStateArray,
      window : "courselist",
      sectiontoedit : {}
    })
   }

   lessonCreatedSuccess(newlesson, sectionpos, coursepos) {
     var newStateArray = this.state.courses.slice();
     if(!newStateArray[coursepos].sections[sectionpos].lessons){
      newStateArray[coursepos].sections[sectionpos].lessons = [];
      }
     newStateArray[coursepos].sections[sectionpos].lessons.push(newlesson);
     this.setState({
       courses : newStateArray,
       window : "courselist"
     })
   }

   lessonUpdatedSuccess(lessonupdated, sectionpos, coursepos) {
    var newStateArray = this.state.courses.slice();
    var objIndex = newStateArray[coursepos].sections[sectionpos].lessons.findIndex((obj => obj.id == lessonupdated.id));
    newStateArray[coursepos].sections[sectionpos].lessons[objIndex].name = lessonupdated.name;
    newStateArray[coursepos].sections[sectionpos].lessons[objIndex].video = lessonupdated.video;
    this.setState({
      courses : newStateArray,
      window : "courselist",
      lessontoedit : {}
    })
   }

   createSection(course, position, section) {
     this.setState({
       window : "createsection",
       selectedcourse : course,
       courseposition : position,
       sectiontoedit : section
     })
   }

   createLesson(sectionid, sectionpos, coursepos, lesson) {
    this.setState({
      window : "createlesson",
      selectedsection : sectionid,
      courseposition: coursepos,
      sectionposition : sectionpos,
      lessontoedit : lesson
    })
  }

  deleteCourse(course, position){
    const self = this;
    const body = {};
    body.id = course.id;
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    Swal.fire({
      title: '¿Seguro que desea borrar el curso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        axios.post(
          'http://localhost:8000/courses/deletecourse',
          body,
          config
          )
    .then(function (response) {
      Swal.fire(
        'Success',
        'Se ha borrado el curso satisfactoriamente',
        'success'
      );
      var newStateArray = self.state.courses.slice();
      newStateArray[position].status = false;
      self.setState({
        courses : newStateArray
      })
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        "Error",
        'error'
      )
    })
    .finally(function () {
      // always executed
    });  
      }
    })
  }

  deleteSection(section, coursepos, sectionpos){
    const self = this;
    const body = {};
    body.id = section.id;
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    Swal.fire({
      title: '¿Seguro que desea borrar la sección?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        axios.post(
          'http://localhost:8000/courses/deletesection',
          body,
          config
          )
        .then(function (response) {
          Swal.fire(
            'Success',
            'Se ha borrado la sección satisfactoriamente',
            'success'
          );
          var newStateArray = self.state.courses.slice();
          newStateArray[coursepos].sections[sectionpos].status = false;
          self.setState({
            courses : newStateArray
          })
        })
        .catch(function (error) {
          console.log(error.response);
          Swal.fire(
            'Cancelled',
            "Error",
            'error'
          )
        })
        .finally(function () {
          // always executed
        });  
      }
    })
  }

  deleteLesson(lesson, coursepos, sectionpos, lessonpos){
    const self = this;
    const body = {};
    body.id = lesson.id;
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    Swal.fire({
      title: '¿Seguro que desea borrar la lección?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        axios.post(
          'http://localhost:8000/courses/deletelesson',
          body,
          config
          )
        .then(function (response) {
          Swal.fire(
            'Success',
            'Se ha borrado la lección satisfactoriamente',
            'success'
          );
          var newStateArray = self.state.courses.slice();
          newStateArray[coursepos].sections[sectionpos].lessons[lessonpos].status = false;
          self.setState({
            courses : newStateArray
          })
        })
        .catch(function (error) {
          console.log(error.response);
          Swal.fire(
            'Cancelled',
            "Error",
            'error'
          )
        })
        .finally(function () {
          // always executed
        });  
      }
    })

  }

  // componentWillMount(){}
  componentDidMount(){
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const body = {
      userId : userId
    };
    const config = {
      headers: { token: token }
    };
    axios.post(
      'http://localhost:8000/courses/getcourses',
      body,
      config
      )
      .then(res => {
        const courses = res.data;
        this.setState({ 
          courses : courses
        });
        console.log(courses);
      })
      .catch(function (error) {
        console.log(error.response.status)
        if(error.response.status == 401) {
          localStorage.setItem('firstname', "");
        localStorage.setItem('lastname', "");
        localStorage.setItem('email', "");
        localStorage.setItem('gender', "");
        localStorage.setItem('id', "");
        localStorage.setItem('usertype', "");
        localStorage.setItem('token', "");
        Swal.fire(
          'Cancelled',
          error.response.data,
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
        } else {
          Swal.fire(
            'Cancelled',
            error.response.data,
            'error'
          )
        }
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
      <div>
        <StudentsModalComponent
        showmodal = {this.state.showmodal}
        hideModal = {this.hideModal}
        courseformodal = {this.state.courseformodal}
        />
        <div style = {{display: (this.state.window == "courselist" ? "block" : "none")}}>
          <CreateCourseComponent
          courseList = {this.state.courses}
          createCourse = {this.createCourse}
          createSection = {this.createSection}
          createLesson = {this.createLesson}
          deleteCourse = {this.deleteCourse}
          deleteSection = {this.deleteSection}
          deleteLesson = {this.deleteLesson}
          modalDisplay = {this.modalDisplay}
          ></CreateCourseComponent>
        </div>
        <div style = {{display: (this.state.window == "createcourse" ? "block" : "none")}}>
          <CreateCourseFormComponent
          courseCreatedSuccess = {this.courseCreatedSuccess}
          courseUpdatedSuccess = {this.courseUpdatedSuccess}
          coursetoedit = {this.state.coursetoedit}
          ></CreateCourseFormComponent>
        </div>
        <div style = {{display: (this.state.window == "createsection" ? "block" : "none")}}>
          <CreateSectionComponent 
          sectioncourse={this.state.selectedcourse} 
          courseposition={this.state.courseposition}
          sectionCreatedSuccess={this.sectionCreatedSuccess}
          sectionUpdatedSuccess={this.sectionUpdatedSuccess}
          sectiontoedit={this.state.sectiontoedit}
          ></CreateSectionComponent>
        </div>
        <div style = {{display: (this.state.window == "createlesson" ? "block" : "none")}}>
          <CreateLessonComponent
          courseposition={this.state.courseposition}
          sectionposition={this.state.sectionposition}
          lessonCreatedSuccess={this.lessonCreatedSuccess}
          lessonUpdatedSuccess={this.lessonUpdatedSuccess}
          lessonsection={this.state.selectedsection}
          lessontoedit={this.state.lessontoedit}
          ></CreateLessonComponent>
        </div>
      </div>
      </div>
    );
  }
}

export default AdminCourseContainerComponent;