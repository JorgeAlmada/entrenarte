import React, { Component } from 'react';
import course1 from "../../assets/images/courses/course-1.jpg";
import avatar from "../../assets/images/avatures/avature-2.png";
import imgg from "../../assets/images/avatures/avature-3.png";
import './CoursePreviewComponent.css';
import ModalPreviewComponent from '../ModalPreviewComponent/ModalPreviewComponent';
const axios = require('axios');
const Swal = require('sweetalert2');

class CoursePreviewComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       course : [],
       loading : false,
       modalshow: false
     };
     this.handleCreateUserCourse = this.handleCreateUserCourse.bind(this);
     this.hideModal = this.hideModal.bind(this);
   }

   hideModal(){
     this.setState({
       modalshow: false
     })
   }

   handleCreateUserCourse() {
    const token = localStorage.getItem('token');
    const body = {
      userId : localStorage.getItem('id'),
      courseId : this.state.course.id
    };
    const config = {
      headers: { token: token }
    };
    Swal.fire({
      title: '¿Seguro que desea inscribirse al curso?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if(result.value) {
        axios.post(
          'http://localhost:8000/courses/newusercourse',
          body,
          config
          )
        .then(function (response) {
          console.log(response.data);
          Swal.fire(
            'Success',
            'Se ha registrado al usuario satisfactoriamente',
            'success'
          );
        })
        .catch(function (error) {
          console.log(error.response);
          Swal.fire(
            'Cancelled',
            "Ya estás registrado a este curso.",
            'error'
          )
        })
      }
    })
   }

  // componentWillMount(){}
  //  componentDidMount(){
  //    this.setState({
  //      course : this.props.selectedcourse
  //    })
  //  }

   componentDidUpdate(prevProps) {
    if(prevProps.selectedCourse !== this.props.selectedCourse) {
      const course = this.props.selectedCourse;
      console.log(course);
      this.setState({ 
        course : course,
        loading: false
      });
    }
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {

    (function (window, document, undefined) {
      'use strict';
      if (!('localStorage' in window)) return;
      var nightMode = localStorage.getItem('gmtNightMode');
      if (nightMode) {
          document.documentElement.className += ' night-mode';
      }
    })(window, document);


    (function (window, document, undefined) {

      'use strict';

      // Feature test
      if (!('localStorage' in window)) return;

      // Get our newly insert toggle
      var nightMode = document.querySelector('#night-mode');
      if (!nightMode) return;

      // When clicked, toggle night mode on or off
      nightMode.addEventListener('click', function (event) {
          event.preventDefault();
          document.documentElement.classList.toggle('night-mode');
          if ( document.documentElement.classList.contains('night-mode') ) {
              localStorage.setItem('gmtNightMode', true);
              return;
          }
          localStorage.removeItem('gmtNightMode');
      }, false);

    })(window, document);
    //scrollTop
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};        
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    }        
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
      <div>
        <div>   
        {/* PreLoader */}         
        <div id="spinneroverlay"> 
          <div className="spinner" />             
        </div>         
        {/* Your app page */}     
        <ModalPreviewComponent
        showmodal = {this.state.modalshow}
        hideModal = {this.hideModal}
        selectedCourse = {this.state.course}
        handleCreateUserCourse = {this.handleCreateUserCourse}
        ></ModalPreviewComponent>    
        <div className="app"> 
          {/*  Top bar nav */}             
          <nav className="uk-navbar-transparent tm-mobile-header uk-animation-slide-top uk-position-z-index uk-navbar" uk-navbar> 
            {/* mobile icon for side nav on nav-mobile*/}                 
            <span className="uk-hidden@m tm-mobile-menu-icon" uk-toggle="target: #side-nav; cls: side-nav-active"><i className="fas fa-bars icon-large" /></span> 
            {/* mobile icon for user icon on nav-mobile */}                 
            <span className="uk-hidden@m tm-mobile-user-icon uk-align-right" uk-toggle="target: #tm-show-on-mobile; cls: tm-show-on-mobile-active"><i className="far fa-user icon-large" /></span> 
            {/* mobile logo */}                 
            <a className="uk-hidden@m uk-logo" href="index.html"> CoursePlus </a> 
            <div className="uk-navbar-left uk-visible@m"> 
              <a className="uk-navbar-item back-to-dashboard uk-button-text " onClick = {() => this.props.changeWindow("courselist")}> Todos los cursos</a> 
            </div>                 
            <div className="uk-navbar-right tm-show-on-mobile uk-flex-right" id="tm-show-on-mobile"> 
              {/* this will clouse after display user icon */}                     
              <span className="uk-hidden@m tm-mobile-user-close-icon uk-align-right" uk-toggle="target: #tm-show-on-mobile; cls: tm-show-on-mobile-active"><i className="fas fa-times icon-large" /></span> 
              <ul className="uk-navbar-nav uk-flex-middle"> 
                <li> 
                  <a href="#modal-full" uk-toggle><i className="fas fa-search icon-medium" /></a> 
                </li>                         
                <li> 
                  {/* your courses */}                             
                  <a href="coursepage"> <i className="fas fa-play uk-hidden@m" /> <span className="uk-visible@m"> Your Courses</span> </a>                             
                </li>                         
                <li> 
                  {/* messages */}                             
                  <a href="#"><i className="fas fa-envelope icon-large" /></a> 
                  <div uk-dropdown="pos: top-right ;mode : click; animation: uk-animation-slide-bottom-small" className="uk-dropdown uk-dropdown-top-right  tm-dropdown-medium border-radius-6 uk-padding-remove uk-box-shadow-large angle-top-right"> 
                    <h5 className="uk-padding-small uk-margin-remove uk-text-bold  uk-text-left"> Messages </h5> 
                    <a href="#" className="uk-position-top-right uk-link-reset"> <i className="fas fa-trash uk-align-right   uk-text-small uk-padding-small"> Clear all</i> </a> 
                    <hr className=" uk-margin-remove" /> 
                    <div className="uk-text-left uk-height-medium"> 
                      <div uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 100" data-simplebar> 
                        <hr className="uk-margin-remove uk-animation-slide-top-small" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src={imgg} alt="Image" className="uk-border-circle uk-animation-slide-left-small" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                        <hr className=" uk-margin-remove" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src="../assets/images/avatures/avature.jpg" alt="Image" className="uk-border-circle uk-animation-slide-left-small" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                        <hr className=" uk-margin-remove" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src="../assets/images/avatures/avature-5.png" alt="Image" className="uk-border-circle uk-animation-slide-left-small" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                        <hr className=" uk-margin-remove" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src="../assets/images/avatures/avature-2.png" alt="Image" className="uk-border-circle uk-animation-slide-left-small" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                        <hr className=" uk-margin-remove" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src="../assets/images/avatures/avature-1.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                        <hr className=" uk-margin-remove" /> 
                        <div className=" uk-padding-small  uk-background-light uk-inline-clip uk-transition-toggle" tabIndex={0}> 
                          <div className="uk-transition-slide-right-small uk-position-top-right uk-position-z-index"> 
                            <a className="uk-button uk-padding-small-right uk-padding-remove-left" href="#">    Delete </a> 
                          </div>                                             
                          <div className="uk-transition-slide-right-medium uk-position-top-right uk-margin-medium-right"> 
                            <a className="uk-button uk-margin-small-right" href="#">    Replay </a> 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove-bottom uk-text-bold">John keni</p> 
                              <p className="uk-margin-remove">Lorem ipsum dolor sit ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-4 uk-flex-first uk-first-column"> 
                              <img src="../assets/images/avatures/avature.jpg" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                      </div>                                     
                    </div>                                 
                    <hr className=" uk-margin-remove" /> 
                    <h5 className="uk-padding-small uk-margin-remove uk-text-bold uk-text-center"><a className="uk-link-heading" href> See all </a> </h5> 
                  </div>                             
                </li>                         
                <li> 
                  {/* Notivications */}                             
                  <a href="#"><i className="fas fa-bell icon-large" /></a> 
                  <div uk-dropdown="pos: top-right ;mode : hover; animation: uk-animation-slide-bottom-small" className="uk-dropdown uk-dropdown-top-right  tm-dropdown-small border-radius-6 uk-padding-remove uk-box-shadow-large angle-top-right"> 
                    <h5 className="uk-padding-small uk-margin-remove uk-text-bold  uk-text-left"> Notivications </h5> 
                    <a href="#" className="uk-position-top-right uk-link-reset"> <i className="fas fa-trash uk-align-right   uk-text-small uk-padding-small"> Clear all</i></a> 
                    <hr className=" uk-margin-remove" /> 
                    <div className="uk-padding-smaluk-text-left uk-height-medium"> 
                      <div data-simplebar> 
                        <div className="uk-padding-small" uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 100 ; repeat: true"> 
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-4.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-1.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature.jpg" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-2.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-3.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-4.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                          <div className="uk-flex-middle uk-grid-small uk-grid" uk-grid> 
                            <div className="uk-width-3-4"> 
                              <p className="uk-margin-remove">Lorem ipsum dolor   ame ..</p> 
                              <p className="uk-margin-remove-top uk-text-small uk-text-muted">25 min</p> 
                            </div>                                                 
                            <div className="uk-width-1-5 uk-flex-first"> 
                              <img src="../assets/images/avatures/avature-1.png" alt="Image" className="uk-border-circle" /> 
                            </div>                                                 
                          </div>                                             
                        </div>                                         
                      </div>                                     
                    </div>                                 
                  </div>                             
                </li>                         
                <li> 
                  {/* User profile */}                             
                  <a href="#"> 
                    <img src={'http://localhost:8000/' + localStorage.getItem('img')} alt="" className="uk-border-circle user-profile-tiny" /> 
                  </a>                             
                  <div uk-dropdown="pos: top-right ;mode : click ;animation: uk-animation-slide-right" className="uk-dropdown  uk-dropdown-top-right  tm-dropdown-small border-radius-6 angle-top-right"> 
                    <div className="uk-grid-small uk-flex-middle uk-margin-small-bottom uk-grid" uk-grid> 
                      <div className="uk-width-1-4  uk-first-column"> 
                        <img src={'http://localhost:8000/' + localStorage.getItem('img')} alt="Image" className="uk-align-center uk-border-circle" /> 
                      </div>                                     
                      <div className="uk-width-3-4"> 
                      <p className="uk-margin-remove-bottom uk-margin-small-top uk-text-bold"> {localStorage.getItem('firstname')} {localStorage.getItem('lastname')}</p> 
                      </div>                                     
                    </div>                                 
                    <ul className="uk-nav uk-dropdown-nav"> 
                      <li> 
                        <a href="admindashboard"> <i className="fas fa-user uk-margin-small-right" /> Profile</a> 
                      </li>                                     
                      <li> 
                        <a href="#"> <i className="fas fa-envelope uk-margin-small-right" /> Messages </a> 
                      </li>                                     
                      <li> 
                        <a href="#"> <i className="fas fa-share uk-margin-small-right" /> Invite freind</a> 
                      </li>                                     
                      <li> 
                        <a href="#"> <i className="fas fa-cog uk-margin-small-right" /> Setting</a> 
                      </li>                                     
                      <li className="uk-nav-divider" />                                     
                      <li> 
                      <a onClick={() => this.props.handleLogout()}> <i className="fas fa-sign-out-alt uk-margin-small-right" /> Log out</a> 
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </li>                         
              </ul>                     
            </div>                 
            {/* search box */}                 
            <div id="modal-full" className="uk-modal-full uk-modal uk-animation-scale-down" uk-modal> 
              <div className="uk-modal-dialog uk-flex uk-flex-center" uk-height-viewport> 
                <button className="uk-modal-close-full" type="button" uk-close />                         
                <form className="uk-search uk-margin-xlarge-top uk-search-large uk-animation-slide-bottom-medium"> 
                  <i className="fas fa-search uk-position-absolute uk-margin-top icon-xxlarge" /> 
                  <input className="uk-search-input uk-margin-large-left" type="search" placeholder="Search..." autofocus /> 
                </form>                         
              </div>                     
            </div>                 
          </nav>         
          <div className="course-intro uk-text-center topic4">
            <h2 className="uk-light uk-text-uppercase uk-text-bold uk-text-white uk-margin-top"> {this.state.course.name} </h2>
            <p className="uk-light uk-text-bold">{this.state.course.description}</p>
            <p className="uk-light uk-text-bold uk-text-small"> <i className="fas fa-star icon-small icon-rate" /> <i className="fas fa-star icon-small icon-rate" /> <i className="fas fa-star icon-small icon-rate" /> <i className="far fa-star icon-small icon-rate" /> <i className="far fa-star icon-small icon-rate" /> <span className="uk-margin-small-right"> {this.state.course.rating / this.state.course.timesrated} ({this.state.course.timesrated} ratings) </span> <br /> <i className="fas fa-user icon-small uk-margin-small-right" /> {this.state.course.students} students enrolled</p>
            <a className="uk-button uk-button-white"  onClick={() => this.handleCreateUserCourse()} uk-tooltip="title: Start this course now ; delay: 200 ; pos: top ;animation:	uk-animation-scale-up"> Start now</a> 
            <a className="uk-button uk-button-white" onClick={() => this.setState({modalshow: true})} uk-toggle uk-tooltip="title: watch preview video ; delay: 200 ; pos: top ;animation:	uk-animation-scale-up">  Preview </a>
            {/* video demo model */}
          </div>
          {/* navigation*/}
          <ul className="uk-tab uk-flex-center  uk-margin-remove-top uk-background-default  uk-sticky" uk-sticky="animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up ; media: @s;" uk-tab>
            <li aria-expanded="true" className="uk-active">
              <a> Course introduciton</a>
            </li>                              
          </ul>
          <ul className="uk-switcher uk-margin uk-padding-small uk-container-small uk-margin-auto  uk-margin-top"> 
            {/* tab 1 About the course */}
            <li className="uk-active">
              <h3> About this Course</h3>
              <p>
                {this.state.course.about}
              </p>
            </li>
          </ul>
          {/* footer */}             
          <div className="uk-section-small uk-margin-medium-top"> 
            <hr className="uk-margin-remove" /> 
            <div className="uk-container uk-align-center uk-margin-remove-bottom uk-position-relative"> 
              <div className="uk-grid" uk-grid> 
                <div className="uk-width-1-3@m uk-width-1-2@s uk-first-column"> 
                  <a href="pages-about.html" className="uk-link-heading uk-text-lead uk-text-bold"> <i className="fas fa-graduation-cap" />  CoursePlus </a> 
                  <div className="uk-width-xlarge tm-footer-description">A unique and beautiful collection of UI elements that are all flexible and modular.   building the website of your dreams.</div>                             
                </div>                         
                <div className="uk-width-expand@m uk-width-1-2@s"> 
                  <ul className="uk-list  tm-footer-list"> 
                    <li> 
                      <a href="#"> Browse Our Library </a> 
                    </li>                                 
                    <li> 
                      <a href="#"> Tutorials/Articles </a> 
                    </li>                                 
                    <li> 
                      <a href="#"> Scripts and codes</a> 
                    </li>                                 
                    <li> 
                      <a href="#"> Ebooks</a> 
                    </li>                                 
                  </ul>                             
                </div>                         
                <div className="uk-width-expand@m uk-width-1-2@s"> 
                  <ul className="uk-list tm-footer-list"> 
                    <li> 
                      <a href="#"> About us </a> 
                    </li>                                 
                    <li> 
                      <a href="#"> Contact Us </a> 
                    </li>                                 
                    <li> 
                      <a href="#"> Privacy </a> 
                    </li>                                 
                    <li> 
                      <a href="#">   Policy </a> 
                    </li>                                 
                  </ul>                             
                </div>                         
                <div className="uk-width-expand@m uk-width-1-2@s"> 
                  <ul className="uk-list  tm-footer-list"> 
                    <li> 
                      <a href="#">Web Design </a> 
                    </li>                                 
                    <li> 
                      <a href="#">Web Development</a> 
                    </li>                                 
                    <li> 
                      <a href="#"> iOS Development </a> 
                    </li>                                 
                    <li> 
                      <a href="#">  PHP Development </a> 
                    </li>                                 
                  </ul>                             
                </div>                         
              </div>                     
              <hr />
              <p className="uk-postion-absoult uk-margin-remove uk-position-bottom-right" style={{bottom: '8px', right: '60px'}} uk-tooltip="title: Visit Our Site; pos: top-center"> Powered By <a href="#" className="uk-text-bold uk-link-reset"> CoursePlus </a></p> 
              <div className="uk-margin-small uk-grid" uk-grid> 
                <div className="uk-width-1-2@m uk-width-1-2@s uk-first-column"> 
                  <p className="uk-text-small"><i className="fas fa-copyright" /> 2019 <span className="uk-text-bold">CoursePlus</span> . All rights reserved.</p> 
                </div>                         
                <div className="uk-width-1-3@m uk-width-1-2@s"> 
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our Youtube Chanal; pos: top-center"><i className="fab fa-youtube" style={{color: '#fb7575  !important'}} /></a>
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our Facebook; pos: top-center"><i className="fab fa-Facebook" style={{color: '#9160ec  !important'}} /></a>
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our Instagram; pos: top-center"><i className="fab fa-Instagram" style={{color: '#dc2d2d  !important'}} /></a>
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our linkedin; pos: top-center"><i className="fab fa-linkedin " style={{color: '#6949a5  !important'}} /></a>
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our google-plus; pos: top-center"><i className="fab fa-google-plus" style={{color: '#f77070 !important'}} /></a>
                  <a href="#" className="uk-icon-button uk-link-reset" uk-tooltip="title: Our Twitter; pos: top-center"><i className="fab fa-twitter" style={{color: '#6f23ff !important'}} /></a>
                </div>                         
              </div>                     
            </div>                 
          </div>              
          {/* footer  end */}             
        </div>         
        {/*InfoBox starts her*/}         
        <div id="infoBox" className="info-box uk-background-default uk-position-bottom-right uk-position-fixed uk-animation-slide-right-medium"> 
          <header className="uk-background-grey"> 
            <h6 className="uk-margin-small-top uk-margin-small-bottom uk-text-white uk-animation-fade">  Information Center </h6> 
            <div className="uk-button-group uk-position-top-right"> 
              <button className="uk-visible@m" uk-toggle="target: #infoBox; cls: info-box-small" uk-tooltip="title: Minimze; pos: top-right"> 
                <i className="far fa-window-maximize icon-medium" /> 
              </button>                     
              <button className="uk-visible@m" uk-toggle="target: #infoBox; cls: info-box-big" uk-tooltip="title: Resize ; pos: top-right"> 
                <i className="fas fa-expand icon-medium" /> 
              </button>                     
              <button uk-toggle="target: #infoBox; cls: infoBox-active" uk-tooltip="title: Close ; pos: top-right"> 
                <i className="far fa-window-close icon-medium" /> 
              </button>                     
            </div>                 
          </header>             
          <div className="info-content"> 
            {/* Home tab */}                 
            <div id="Home-tab" className="infotabcontent tab-default-open"> 
              {/* view more */}                     
              <div className="uk-position-bottom-center Veiw-more uk-animation-slide-bottom-medium uk-visible@m uk-background-muted" uk-toggle="target: #infoBox; cls: info-box-big"> 
                <span> Veiw More</span>
              </div>                     
              <div className="uk-padding-small uk-background-grey info-box-hero"> 
                <h3 className="uk-text-white uk-animation-slide-bottom-medium  uk-margin-small-left"> <i className="fas fa-exclamation icon-large" /> Knowledge Base </h3> 
                <h6 className="  uk-text-white uk-margin-small  uk-margin-small-left"> <a className="Course-tags uk-text-white" style={{background: '#ffffff33', border: 0}} href="pages-help.html"> View more </a> </h6> 
              </div>                     
              <div className="uk-padding-small  uk-padding-remove-top uk-clearfix" uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 100"> 
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabOne')"> 
                  <i className="fas fa-user-shield info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Privacy </p> 
                </div>                         
                <div className="uk-card-small boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabTwo')"> 
                  <i className="fas fa-user-plus info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Membership</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabOne')"> 
                  <i className="fas fa-question	 info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Help</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabTwo')"> 
                  <i className="fas fa-comment-dots info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Terms</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabOne')"> 
                  <i className="fas fa-wallet info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Peyments</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabTwo')"> 
                  <i className="fas fa-shield-alt info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center">  Secure</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabOne')"> 
                  <i className="fas fa-user-shield info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center">  Privacy</p> 
                </div>                         
                <div className="uk-card-small uk-text-center boxes uk-card-hover uk-padding-small uk-inline-clip border-radius-6 scale-up" onclick="InfoTabs(event, 'tabTwo')"> 
                  <i className="fas fa-user info-big-icon" /> 
                  <p className="uk-margin-small-top uk-margin-remove-bottom   uk-text-small uk-text-center"> Account</p> 
                </div>                         
              </div>                     
              <div className="uk-grid" uk-grid> 
                <div className="uk-width-1-2@m"> 
                  <ul className="uk-list uk-list-striped uk-text-center"> 
                    <li> 
                      <a href="#" className="uk-link-reset"> How do I sign up?</a> 
                    </li>                                 
                    <li>
                      <a href="#" className="uk-link-reset">Can I remove a post? </a>
                    </li>                                 
                    <li>
                      <a href="#" className="uk-link-reset"> How do reviews work?</a>
                    </li>
                  </ul>                             
                </div>                         
                <div className="uk-width-1-2@m  uk-padding-remove-left uk-text-center"> 
                  <ul className="uk-list uk-list-striped"> 
                    <li> 
                      <a href="#" className="uk-link-reset"> How i can be instructure </a> 
                    </li>                                 
                    <li>
                      <a href="#" className="uk-link-reset">Can I remove a post? </a>
                    </li>                                 
                    <li>
                      <a href="#" className="uk-link-reset"> How do reviews work?</a>
                    </li>
                  </ul>                             
                </div>                         
              </div>                     
              <a href="pages-faq.html" className="uk-align-center uk-text-center uk-margin-small-top"> Visit Our Faq page</a> 
            </div>                 
            {/* tab One */}                 
            <div id="tabOne" className="infotabcontent"> 
              <div className="uk-background-grey tab-subheader"> 
                <a href="#" className="uk-link-reset  uk-animation-slide-right" onclick="InfoTabs(event, 'Home-tab')"><i className="fas fa-angle-left icon-medium" /> </a> 
                PRIVACY
              </div>                     
              <div className="demo1 tab-content   uk-animation-slide-right-small  uk-margin-small-top" data-simplebar> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4 className="uk-margin-small"> Can I specify my own private key? </h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4> My files are missing! How do I get them back? </h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4> How can I access my account data? </h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <a href="pages-terms.html" style={{marginBottom: '130px'}} lass="uk-align-center uk-text-center uk-h5 uk-link-heading"> Visit Our PRIVACY page </a> 
              </div>                     
            </div>                 
            {/* tab Two  */}                 
            <div id="tabTwo" className="infotabcontent"> 
              <div className="uk-background-grey tab-subheader"> 
                <a href="#" className="uk-link-reset  uk-animation-slide-right" onclick="InfoTabs(event, 'Home-tab')"><i className="fas fa-angle-left icon-medium" /> </a> 
                PAYMENTS
              </div>                     
              <div className="demo1 tab-content uk-animation-slide-right-small  uk-margin-small-top" data-simplebar> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4> Can I have an invoice for my subscription?</h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4> Why did my credit card or PayPal payment fail? </h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <h4> Why does my bank statement show multiple charges for one upgrade? </h4> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 
                <a href="pages-terms.html" style={{marginBottom: '130px'}} lass="uk-align-center uk-text-center uk-h5 uk-link-heading"> Visit Our Peyment page </a> 
              </div>                     
            </div> 
          </div>             
        </div>             
        {/* app end */} 
        {/* button scrollTop */} 
        <button id="scrollTop" className="uk-animation-slide-bottom-medium"> <a href="#" className="uk-text-white" uk-totop uk-scroll /> </button>      
        {/*  Night mood */}              
      </div>

      </div>
    );
  }
}

export default CoursePreviewComponent;