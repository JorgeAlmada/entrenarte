import React, { Component } from 'react';
import './CourseDashboardComponent.css';
import course1 from "../../assets/images/courses/course-1.jpg";
import avatar from "../../assets/images/avatures/avature-2.png";
import imgg from "../../assets/images/avatures/avature-3.png";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveCourses, selectCourse } from '../../actions';
const axios = require('axios');

class CourseDashboardComponent extends Component {
  constructor(props){
    super(props);
     this.state = {
       loading: true,
       course: [],
       sections : [],
       selectedtab: "description"
     };
  }

  // componentWillMount(){}
  componentDidMount(){
  }
  // componentWillUnmount(){}

  componentDidUpdate(prevProps) {
    if(prevProps.selectedCourse !== this.props.selectedCourse) {
      const course = this.props.selectedCourse;
      this.setState({ 
        course : course,
        sections : course.sections,
        loading: false
      });
      console.log("SELECTEDCOURSE!")
      console.log(this.props.selectedCourse)
    }
  }
  // shouldComponentUpdate(){}

  // -- script inside the templates html --


  render() {

    // ----- template script ------
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

    // ----- template script finish ------

    return (
      <div>
        <div>
        {/* Flash Message */}         
        <div id="note">
          Congratulations you hava successfully register this Course Enjoy it.
          <a className="uk-margin-medium-right uk-margin-remove-bottom uk-position-relative uk-icon-button uk-align-right  uk-margin-small-top" uk-toggle="target: #note; cls:uk-hidden"> <i className="fas fa-times  uk-position-center" /> </a>
        </div>         
        {/* side nav*/}             
        {/* PreLoader */}         
        <div id="spinneroverlay" style={{display : this.state.loading ? 'block' : 'none'}}> 
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
                  <a onClick={() => this.props.changeWindow("courselist")}> <i className="fas fa-play uk-hidden@m" /> <span className="uk-visible@m"> Your Courses</span> </a>                            
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
          <div className="course-dhashboard topic2">
            <div className="uk-grid" uk-grid>
              <div className="uk-width-1-2@m uk-padding-remove-left uk-visible@m">
                <div className="course-video-demo uk-position-relative">
                  <div className="video-responsive">
                    <iframe src={this.state.course.video} className="uk-padding-remove" uk-video="automute: true" frameBorder={0} allowFullScreen uk-responsive />
                  </div> 
                  {/*  Local video
                            <video loop muted playsinline controls uk-video="autoplay: inview"> 
                                <source src="videos/course-intro.mp4" type="video/mp4"> 
                            </video> 
                            */}
                </div>                         
              </div>                     
              <div className="uk-width-1-2@m uk-padding">
                <h2 className="uk-light uk-text-uppercase uk-text-bold uk-text-white"> {this.state.course.name} </h2>
                <p className="uk-light uk-text-bold">{this.state.course.description}</p>
                <p className="uk-light uk-text-bold uk-text-small"> <i className="fas fa-star icon-small icon-rate" /> <i className="fas fa-star icon-small icon-rate" /> <i className="fas fa-star icon-small icon-rate" /> <i className="far fa-star icon-small icon-rate" /> <i className="far fa-star icon-small icon-rate" /> 
                  { (this.state.course.rating / this.state.course.timesrated).toString() +  " (" +this.state.course.timesrated+ " ratings)" }    </p>
                {/* students images  */}                         
                <div className="avatar-group uk-margin" uk-scrollspy="target: > img; cls:uk-animation-slide-right; delay: 200">
                  <img src="../assets/images/avatures/avature-1.png" alt="" /> 
                  <img src="../assets/images/avatures/avature.jpg" alt="" /> 
                  <img src="../assets/images/avatures/avature-2.png" alt="" /> 
                  <span className="uk-text-bold uk-light">  5134 + students enrolled </span>  
                </div>                         
                <div className="uk-grid-small uk-grid" uk-grid>
                  <div className="uk-width-auto">
                    <a className="uk-button uk-button-white uk-float-left" href="Course-lesson.html" uk-tooltip="title: Star This course now  ; delay: 300 ; pos: top ;animation:	uk-animation-slide-bottom-small"> Continue</a>
                  </div>
                  <div className="uk-width-expand"> 
                    <span className="uk-light uk-text-small uk-text-bold"> My progress </span>
                    <progress id="js-progressbar" className="uk-progress progress-green uk-margin-small-bottom uk-margin-small-top" value={50} max={100} style={{height: '8px'}} />
                  </div>
                </div>                         
              </div>                     
            </div>                 
          </div>             
          <ul className="uk-child-width-expand course-dhashboard-subnav uk-tab" uk-tab>
            <li className={this.state.selectedtab == "description" ? "uk-active" : ""}>
              <a href="#" className="tablinks" onClick={(e) => {this.setState({selectedtab : "description"});e.preventDefault(); window.openTabs(e, 'Discription')}}> Description</a>
            </li>
            <li className={this.state.selectedtab == "videos" ? "uk-active" : ""}>
              <a href="#" className="tablinks" onClick={(e) => {this.setState({selectedtab : "videos"});e.preventDefault(); window.openTabs(e, 'Course-Videos')}}> <span className="uk-visible@m"> Course </span>  Videos </a>
            </li>
            <li className={this.state.selectedtab == "discussions" ? "uk-active" : ""}>
              <a href="#" className="tablinks" onClick={(e) => {this.setState({selectedtab : "discussions"});e.preventDefault(); window.openTabs(e, 'Discussions')}}> Discussions </a>
            </li>
            <li className={this.state.selectedtab == "files" ? "uk-active" : ""}>
              <a href="#" className="tablinks" onClick={(e) => {this.setState({selectedtab : "files"});e.preventDefault(); window.openTabs(e, 'Exercise-Files')}}><span className="uk-visible@m"> Exercise </span>  Files </a>
            </li>                 
          </ul>
          <div className="uk-container tm-hero">
            <div className="uk-grid" uk-grid>
              {/* page contant */}
              <div className="uk-width-2-3@m uk-first-column">
                {/* Discription tab  */}                         
                <div id="Discription" className="tabcontent tab-default-open animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium"> 
                  <h3> About this Course</h3>
                  <p>{ this.state.course.about }</p>
                </div>
                {/* Course-Videos tab  */}
                <div id="Course-Videos" className="tabcontent  animation: uk-animation-slide-right-medium">
                  <ul uk-accordion className="uk-accordion"> 
                  {
                    (this.state.sections.length > 0) ? 
                    this.state.sections.map((section,index) => 
                    <li key={section.id} className="uk-open tm-course-lesson-section uk-background-default"> 
                    <a className="uk-accordion-title uk-padding-small" href="#"><h6> section {index + 1}</h6> <h4 className="uk-margin-remove"> {section.name}</h4> </a> 
                    <div className="uk-accordion-content uk-margin-remove-top"> 
                      <div className="tm-course-section-list">
                        <ul> 
                          {
                            section.lessons.map(lesson => 
                              <li key={lesson.id}>
                                <a className="uk-link-reset" onClick={() => this.props.sectionSelected(section)}> 
                                  {/* Play icon  */}                                                         
                                  <span className="uk-icon-button icon-play"> <i className="fas fa-play icon-small" /> </span>
                                  {/* Course title  */}                                                         
                                  <div className="uk-panel uk-panel-box uk-text-truncate uk-margin-medium-right">{lesson.name}</div>
                                  {/* preview link */}
                                </a>
                                {/*<a className="uk-link-reset uk-margin-large-right uk-position-center-right uk-padding-small uk-text-small uk-visible@s" href="#preview-video-1" uk-toggle> <i className="fas fa-play icon-small uk-text-grey" /> Preveiw</a>*/}
                                {/* time */}
                                {/*<span className="uk-position-center-right time uk-margin-right"> <i className="fas fa-clock icon-small" />  2 min</span>*/}
                              </li> 
                            )
                              }                                                                                               
                            </ul>
                          </div>                                         
                        </div>                                     
                      </li>    
                    
                    )
                    : ""
                  }                                                           
                  </ul>
                  {/* Model  Preview videos*/}
                  {/* Model  Preview videos*/}
                </div>
                {/* Discussions tab  */}
                <div id="Discussions" className="tabcontent animation:uk-animation-fade">
                  <h3>Discussions</h3>                            
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-3.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Etiam sit amet augue non velit aliquet consectetur. Proin gravida, odio in facilisis pharetra, neque enim aliquam eros,.</p> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-5.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img alt="Image" src="../assets/images/avatures/avature.jpg" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Maecenas vel dolor sit amet ligula interdum tempor id eu ipsum. Suspendisse pharetra risus ut metus elementum pulvinar. Mauris eget varius tellus. Cras et lorem vel nunc gravida porttitor.</p> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-1.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-2.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-4.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-3.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>
                  <div className="uk-padding-small uk-background-light uk-position-relative">
                    <div className="uk-flex-middle uk-grid-small uk-grid-stack uk-grid" uk-grid> 
                      <div className="uk-width-1-6 uk-flex-first uk-first-column">
                        <img src="../assets/images/avatures/avature-4.png" alt="Image" className="uk-width-1-2 uk-border-circle" />
                      </div>
                      <div className="uk-width-5-6"> 
                        <p className="uk-margin-remove-bottom uk-text-bold uk-text-small">John keniss</p> 
                        <p className="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                      </div>                                     
                    </div>                                 
                  </div>                             
                </div>
                {/* Exercise-Files  */}
                <div id="Exercise-Files" className="tabcontent animation: uk-animation-slide-right-medium">
                <ul uk-accordion className="uk-accordion"> 
                  {
                    (this.state.sections.length > 0) ? 
                    this.state.sections.map((section,index) => 
                    <li key={section.id} className="uk-open tm-course-lesson-section uk-background-default"> 
                    <a className="uk-accordion-title uk-padding-small" href="#"><h6> section {index + 1}</h6> <h4 className="uk-margin-remove"> {section.name}</h4> </a> 
                    <div className="uk-accordion-content uk-margin-remove-top"> 
                      <div className="tm-course-section-list">
                        <ul> 
                          {
                            section.lessons.map(lesson => 
                              // <li key={lesson.id}>
                              //   <a className="uk-link-reset" onClick={() => this.props.sectionSelected(section)}> 
                              //     {/* Play icon  */}                                                         
                              //     <span className="uk-icon-button icon-play"> <i className="fas fa-play icon-small" /> </span>
                              //     {/* Course title  */}                                                         
                              //     <div className="uk-panel uk-panel-box uk-text-truncate uk-margin-medium-right">{lesson.name}</div>
                              //     {/* preview link */}
                              //   </a>
                              // </li> 
                              {
                                if(lesson.file.length > 0) {
                                  return <li key={lesson.id}> 
                                  <i className="fas fa-file-alt uk-margin-small-right icon-medium" />
                                  {lesson.name}
                                  <a className="uk-icon-button uk-margin-small-right uk-button-success uk-position-center-right" target="_blank" href={"http://localhost:8000/" + lesson.file}> <i className="fas fa-download icon-small" /> </a>
                                  </li>     
                                }
                              }
                            )
                              }                                                                                               
                            </ul>
                          </div>                                         
                        </div>                                     
                      </li>    
                    
                    )
                    : ""
                  }                                                           
                  </ul>
                </div>                         
              </div>
              {/* side contant */}
              {/* <div className="uk-width-1-3@m uk-visible@m"> 
                <h3 className="uk-text-bold"> Related Courses </h3>
                <div className="uk-card-default uk-card-hover uk-card-small Course-card uk-inline-clip uk-margin-medium-bottom">
                  <a href="Course-intro-one.html" className="uk-link-reset"> 
                    <img src={course1} className="course-img" /> 
                  </a><div className="uk-card-body"><a href="Course-intro-one.html" className="uk-link-reset"> 
                      <h4>Build from Scratch</h4> 
                      <p> Lorem ipsum dolor sit amet tempor consectetur adipiscing elit, sed do eiusmod tempor ... </p> 
                      <hr className="uk-margin-remove-top" /> 
                    </a><a className="Course-tags uk-margin-small-right tags-active" href="Course-all-tags.html"> JavaScript </a> 
                    <a className="Course-tags" href="Course-all-tags.html"> Beginner </a> 
                  </div>                                 
                </div>                         
                <div className="uk-card-default uk-card-hover uk-card-small Course-card uk-inline-clip uk-margin-medium-bottom">
                  <a href="Course-intro-one.html" className="uk-link-reset"> 
                    <img src={course1} className="course-img" /> 
                  </a><div className="uk-card-body"><a href="Course-intro-one.html" className="uk-link-reset"> 
                      <h4> How to Create A Website</h4> 
                      <p> Lorem ipsum dolor sit amet tempor consectetur adipiscing elit, sed do eiusmod tempor ...</p> 
                      <hr className="uk-margin-remove-top" /> 
                    </a><a className="Course-tags uk-margin-small-right tags-active" href="Course-all-tags.html"> JavaScript </a> 
                    <a className="Course-tags" href="Course-all-tags.html"> Beginner </a> 
                  </div>                                 
                </div>
              </div> */}
            </div>
          </div>
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

const mapStateToProps = (state) => {
  return {
    courses: state.coursesReducer,
    selectedcourse: state.selectedcourseReducer
  };
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    saveCourses : saveCourses,
    selectCourse : selectCourse
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CourseDashboardComponent);