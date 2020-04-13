import React, { Component } from 'react';
import bigimage from "../../assets/images/courses/course-catagory-hero.jpg";
import avatar from "../../assets/images/avatures/avature-2.png";
import imgcourse from "../../assets/images/courses/course-10.jpg";
import imgvideo from "../../assets/images/icons/Video.png";
import imgstudents from "../../assets/images/icons/students.png";
import imgdiscussion from "../../assets/images/icons/Discussion.png";
import SessionExpiredAlertComponent from '../SessionExpiredAlertComponent/SessionExpiredAlertComponent';
import './AllCoursesCatalogComponent.css';
import { Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
const axios = require('axios');
const Swal = require('sweetalert2');
const history = createBrowserHistory();



class AllCoursesCatalogComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       courses : [],
       loading: true,
       errorinfo: ""
     };
   }
  // componentWillMount(){}
  componentDidMount(){
    /*const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    axios.get(
      'http://localhost:8000/courses/getallcourses',
      config
      )
      .then(res => {
        const courses = res.data;
        this.setState({ 
          courses : courses,
          loading: false
        });
        console.log(courses);
      })*/
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    const self = this;
    axios.get(
      'http://localhost:8000/courses/getallcourses',
      config
      )
      .then(res => {
        const courses = res.data;
        console.log(courses);
        self.setState({ 
          courses : courses,
          loading: false
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

    // Preloader
    /* var spinneroverlay = document.getElementById("spinneroverlay");
    window.addEventListener('load', function(){
        spinneroverlay.style.display = 'none';
    }); */

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
        {/* side nav*/}               
        {/* PreLoader */}      
        <div id="spinneroverlay" style={{display : (this.state.loading) ? "block" : "none"}}> 
          <div className="spinner" />             
        </div>         
        {/* Your app page */}         
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
              <a className="uk-navbar-item back-to-dashboard uk-button-text " href="allcourses" uk-tooltip="title: back-to-dashboard ; delay: 700 ; pos: bottom-left ;animation:	uk-animation-scale-up">Todos los cursos</a> 
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
                              <img src="../assets/images/avatures/avature-3.png" alt="Image" className="uk-border-circle uk-animation-slide-left-small" /> 
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
                        <a href="#"> <i className="fas fa-share uk-margin-small-right" /> Invite friend</a> 
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
          <ul className="uk-switcher switcher-container"> 
            <li> 
              <div className="topic2 hero-bg"> 
                <div className="uk-grid" uk-grid> 
                  <div className="uk-width-1-2@m"> 
                    <h1 className="uk-animation-fade"> Cursos  </h1> 
                    <p> Todos los cursos.</p> 
                    <div className="uk-visible@m uk-animation-slide-bottom-small uk-grid" uk-grid> 
                      <div className="uk-width-1-3@m"> 
                        <img src={imgvideo} className="img-small" /> 
                        <span className="uk-text-middle uk-text-white">17 Courses </span> 
                      </div>                                     
                      <div className="uk-width-1-3@m"> 
                        <img src={imgstudents} className="img-small" /> 
                        <span className="uk-text-middle uk-text-white">12 + Students </span> 
                      </div>                                     
                      <div className="uk-width-1-3@m"> 
                        <img src={imgdiscussion} className="img-small" /> 
                        <span className="uk-text-middle uk-text-white">17 Discussion </span> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                  <div className="uk-width-1-2@m uk-visible@m"> 
                    <img src={bigimage} alt="" className="uk-align-right img-xxlarge" /> 
                  </div>                             
                </div>                         
              </div>                     
            </li>                              
          </ul>             
          {/* mobile catagory button*/}             
          <button className="uk-button uk-hidden@m  mobile-catagory-button" type="button" uk-toggle="target: #tabs-moible; cls: tabs-moible"> Open subcatagory </button>             
          <ul className="uk-subnav uk-subnav-pill tabs-moible-hidden" uk-switcher="connect: .switcher-container" id="tabs-moible"> 
            <li className="uk-active"> 
              <a href="#"> Cursos </a> 
            </li>                                
          </ul>             
          <ul className="uk-switcher switcher-container"> 
            <li> 
              {/*  Web development */}                     
              <div className="uk-container"> 
                <div className="uk-clearfix"> 
                  <div className="uk-float-left section-heading none-border"> 
                    <h2>Todos los cursos</h2> 
                    <p> - </p> 
                  </div>                             
                  {/* filter <div className="uk-float-right"> 
                    <a href="#" className="uk-link-reset uk-margin-small-right uk-text-small uk-text-uppercase" uk-tooltip="title: Course Filter; pos: top-right" uk-toggle="target: #Course-Filter ; animation: uk-animation-fade; queued: true">   FILTER </a> 
                    <a href="#" className="uk-link-reset uk-margin-small-right" uk-tooltip="title: Course card; pos: top-right"> <i className="fas fa-th-large" /> </a> 
                    <a href="Course-list.html" className="uk-margin-small-right" uk-tooltip="title:Course list; pos: top-right"><i className="fas fa-th-list" /> </a> 
                    <span className="uk-text-small uk-text-uppercase"> Sort by :</span> 
                    <button className="uk-button uk-button-default uk-background-default uk-button-small" type="button" uk-tooltip="title: Sort; pos: top-right"> Newest</button>                                 
                    <div uk-dropdown="pos: top-right ;mode : click" className="uk-dropdown  uk-dropdown-top-right" style={{left: '-141px', top: '-267px'}}> 
                      <ul className="uk-nav uk-dropdown-nav"> 
                        <li className="uk-active"> 
                          <a href="#">Best Courses</a> 
                        </li>                                         
                        <li> 
                          <a href="#">Newest Courses</a> 
                        </li>                                         
                        <li> 
                          <a href="#">Most Courses takes </a> 
                        </li>                                         
                        <li> 
                          <a href="#">Oldest Courses</a> 
                        </li>                                         
                        <li className="uk-nav-divider" />                                         
                        <li> 
                          <a href="#">trending Courses</a> 
                        </li>                                         
                      </ul>                                     
                    </div>
    </div>  */}                           
                </div>
                {/* Filter course  */}
                {/*<div id="Course-Filter" hidden className="uk-margin-top uk-margin-large-bottom uk-position-relative">
                  <h3 className="uk-visible@s uk-text-uppercase"> FILTER </h3>
                  <div className="uk-position-top-right">
                    <button className="uk-button uk-button-white" uk-toggle="target: #Course-Filter ; animation: uk-animation-fade; queued: true"> Cancel </button>
                    <button className="uk-button uk-button-grey"> Apply </button>
                  </div>
                  <hr className="uk-margin-small" />
                  <div className="uk-child-width-1-4@m uk-child-width-1-2 uk-grid" uk-grid>
                    <div>
                      <b> Topic </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" defaultChecked="checked" />
                          <span className="checkmark uk-text-small"> Web Design </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> HTML </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Javascript </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> PHP </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                      </div>                                     
                    </div>
                    <div>
                      <b> Level </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> all Levels </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 10 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Beginner </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 4 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Intermediate </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 2 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Expert </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                      </div>                                     
                    </div>
                    <div>
                      <b> Language </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> English </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 2 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Arabic </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Español </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 5 </span>
                        </label>                                         
                      </div>                                     
                    </div>                                 
                    <div>
                      <b> Price </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Paid </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 2 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Free </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 5 </span>
                        </label>                                         
                      </div>                                     
                    </div>                                 
                    <div>
                      <b> Features </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Captions </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> Quizzes </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 4 </span>
                        </label>                                         
                      </div>                                     
                    </div>
                    <div>
                      <b> Ratings </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small">  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" /> 
                            5  </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small">  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" /> 
                            4.0 &amp; up</span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 2 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small">  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" /> 
                            3.0 &amp; up</span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 5 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small">  <i className="fas fa-star icon-small icon-rate" />  <i className="fas fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" />  <i className="far fa-star icon-small icon-rate" /> 
                            2.0 &amp; up</span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                      </div>                                     
                    </div>                                 
                    <div>
                      <b> Duration </b> 
                      <div className="uk-flex uk-flex-column">
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small">   0-2 Hours </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> 3-6 Hours</span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> 7-16 Hours </span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                        <label> 
                          <input className="uk-checkbox uk-margin-small-right" type="checkbox" />
                          <span className="checkmark uk-text-small"> 17+ Hours</span>
                          <span className="uk-text-muted uk-margin-small-left uk-text-small"> 3 </span>
                        </label>                                         
                      </div>                                     
                    </div>                                 
                  </div>                             
                </div>*/}
                <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-margin uk-grid" uk-scrollspy="cls: uk-animation-slide-bottom-small; target: > div ; delay: 200" uk-grid> 
                  {/* Course 1 */}
                  {this.state.courses.map((course, index) => {
                    if(course.status) return <div key={course.id} onClick={() => this.props.courseSelected(course)}> 
                    <div className="uk-card-default uk-card-hover uk-card-small Course-card uk-inline-clip uk-transition-toggle" tabIndex={course.id}> 
                      {/*<div className="uk-transition-slide-right-small uk-position-top-right uk-padding-small uk-position-z-index"> 
                        <a className="uk-button course-badge" href="#"> <i className="fas fa-heart icon-medium" /> </a> 
                      </div>                                     
                      <div className="uk-transition-slide-right-medium uk-position-top-right uk-padding-small uk-margin-medium-right"> 
                        <a className="uk-button uk-margin-small-right course-badge" href="#"> <i className="far fa-check-square icon-medium" /> </a> 
  </div>   */}                                  
                      <a className="uk-link-reset"> 
                      <div className="course-img" style={{overflow: "hidden"}}>
                          <img src={"http://localhost:8000/" + course.img} alt="" className="course-img"/> 
                      </div> 
                      </a><div className="uk-card-body"><a className="uk-link-reset"> 
                          <h4>{course.name}</h4> 
                          <p> {course.description} </p> 
                          <hr className="uk-margin-remove-top" /> 
                        </a><div className="uk-clearfix"><a className="uk-link-reset"> 
                          </a><div className="uk-float-left"><a className="uk-link-reset"> 
                            </a>                                                                                                    
                          </div>                                                                                               
                        </div>                                             
                      </div>                                         
                    </div>                                 
                  </div>  
                  })}                                                     
                </div>                         
              </div>                     
            </li>                 
            <li> 
              {/*  Mobile app */}                                       
            </li>                 
            <li> 
              {/*  Game development */}                                       
            </li>                 
            <li> 
              {/*  Software   */}                                        
            </li>                 
            <li> 
              {/*  Development Tools */}                                       
            </li>                 
            <li> 
              {/*  Ecommerce  */}                                        
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
    );
  }


}

export default AllCoursesCatalogComponent;