import React, { Component } from 'react';
import './ProfileNavbarComponent.css';
import avatar from "../../assets/images/avatures/avature-2.png";

class ProfileNavbarComponent extends Component {
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
        <div className="uk-navbar-right tm-show-on-mobile uk-flex-right" id="tm-show-on-mobile"> 
              {/* this will clouse after display user icon */}                     
              <span className="uk-hidden@m tm-mobile-user-close-icon uk-align-right" uk-toggle="target: #tm-show-on-mobile; cls: tm-show-on-mobile-active"><i className="fas fa-times icon-large" /></span> 
              <ul className="uk-navbar-nav uk-flex-middle"> 
                <li> 
                  <a href="#modal-full" uk-toggle><i className="fas fa-search icon-medium" /></a> 
                </li>                         
                <li> 
                  {/* your courses */}                             
                  <a href="#"> <i className="fas fa-play uk-hidden@m" /> <span className="uk-visible@m"> Your Courses</span> </a> 
                  <div uk-dropdown="pos: top-right ;mode : click; animation: uk-animation-slide-bottom-medium" className="uk-dropdown border-radius-6  uk-dropdown-top-right tm-dropdown-large uk-padding-remove"> 
                    <div className="uk-clearfix"> 
                      <div className="uk-float-left"> 
                        <h5 className="uk-padding-small uk-margin-remove uk-text-bold  uk-text-left">  Your Courses </h5> 
                      </div>                                     
                      <div className="uk-float-right">   
                        <i className="fas fa-check uk-align-right  uk-margin-remove uk-margin-remove-left  uk-padding-small uk-text-small"> Completed 3 / 5 </i> 
                      </div>                                     
                    </div>                                 
                    <hr className=" uk-margin-remove" /> 
                    <div className="uk-padding-smaluk-text-left uk-height-medium"> 
                      <div className="demo1" data-simplebar> 
                        <div className="uk-child-width-1-2@s  uk-grid-small uk-padding-small uk-grid" uk-scrollspy="target: > div; cls:uk-animation-slide-bottom-small; delay: 100 ;repeat: true" uk-grid> 
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                            </a><div className="uk-padding-small uk-card-default"><a href="Course-intro-one.html" className="uk-link-reset"> 
                                <progress id="js-progressbar" className="uk-progress progress-green uk-margin-small-bottom" value={100} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/tags/css3.JPG" className="uk-align-left  uk-margin-small-right uk-margin-small-bottom  uk-width-1-3  uk-visible@s" alt="" /> 
                                <p className="uk-text-bold uk-margin-remove">CSS3 Introduciton </p> 
                                <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                              </a><div className="uk-margin-small"><a href="Course-intro-one.html" className="uk-link-reset"> 
                                </a><a className="Course-tags uk-margin-small-right   border-radius-6" href="#"> <i className="fas fa-play" /> Course resume</a> 
                              </div>                                                         
                            </div>                                                     
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                            </a><div className="uk-padding-small uk-card-default"><a href="Course-intro-one.html" className="uk-link-reset"> 
                                <progress id="js-progressbar" className="uk-progress progress-coral  uk-margin-small-bottom" value={15} max={100} style={{height: '7px !important'}} />                                                         
                                <img src="../assets/images/courses/tags/html5.jpg" className="uk-align-left  uk-margin-small-right uk-margin-small-bottom  uk-width-1-3  uk-visible@s" alt="" /> 
                                <p className="uk-text-bold uk-margin-remove">HTML5 Introduciton </p> 
                                <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                              </a><div className="uk-margin-small"><a href="Course-intro-one.html" className="uk-link-reset"> 
                                </a><a className="Course-tags uk-margin-small-right   border-radius-6" href="#"> <i className="fas fa-play" /> Course resume</a> 
                              </div>                                                         
                            </div>                                                     
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default"> 
                                <progress id="js-progressbar" className="uk-progress uk-margin-small-bottom" value={50} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-4.jpg" className="uk-align-left  uk-margin-small-right uk-margin-small-bottom  uk-width-1-3" alt="" /> 
                                <p className="uk-text-bold uk-margin-remove">Html Introduciton </p> 
                                <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default"> 
                                <progress id="js-progressbar" className="uk-progress progress-green uk-margin-small-bottom" value={100} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-5.jpg" className="uk-align-left  uk-margin-small-right uk-margin-small-bottom  uk-width-1-3" alt="" /> 
                                <p className="uk-text-bold uk-margin-remove">Web Introduciton </p> 
                                <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default uk-position-relative"> 
                                <progress id="js-progressbar" className="uk-progress  uk-margin-small-bottom" value={30} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-10.jpg" alt="" /> 
                                <div className="uk-position-absolute uk-position-medium uk-position-bottom-left uk-text-white"> 
                                  <p className="uk-text-bold uk-margin-remove">CSS3 Introduciton </p> 
                                  <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                                </div>                                                         
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default uk-position-relative"> 
                                <progress id="js-progressbar" className="uk-progress  uk-margin-small-bottom" value={70} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-7.png" alt="" /> 
                                <div className="uk-position-absolute uk-position-medium uk-position-bottom-left uk-text-white"> 
                                  <p className="uk-text-bold uk-margin-remove">Bootstrap Introduciton </p> 
                                  <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                                </div>                                                         
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default"> 
                                <progress id="js-progressbar" className="uk-progress progress-green uk-margin-small-bottom" value={100} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-8.jpg" alt="" /> 
                                <div className> 
                                  <p className="uk-text-bold uk-margin-small-top uk-margin-remove-bottom">Python Introduciton </p> 
                                  <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                                </div>                                                         
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                          <div> 
                            <a href="Course-intro-one.html" className="uk-link-reset"> 
                              <div className="uk-padding-small uk-card-default"> 
                                <progress id="js-progressbar" className="uk-progress  uk-margin-small-bottom" value={80} max={100} style={{height: '7px'}} />                                                         
                                <img src="../assets/images/courses/course-9.jpg" alt="" /> 
                                <div className> 
                                  <p className="uk-text-bold uk-margin-small-top uk-margin-remove-bottom"> JavaScript Introduciton </p> 
                                  <p className="uk-text-small uk-margin-remove"> by : Hamse mohamoud </p> 
                                </div>                                                         
                              </div>                                                     
                            </a>                                                 
                          </div>                                             
                        </div>                                         
                      </div>                                     
                    </div>                                 
                    <hr className=" uk-margin-remove" /> 
                    <h5 className="uk-padding-small uk-margin-remove uk-text-bold uk-text-center"><a className="uk-link-heading" href="#"> See all </a> </h5> 
                  </div>                             
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
                    <img src={avatar} alt="" className="uk-border-circle user-profile-tiny" /> 
                  </a>                             
                  <div uk-dropdown="pos: top-right ;mode : click ;animation: uk-animation-slide-right" className="uk-dropdown  uk-dropdown-top-right  tm-dropdown-small border-radius-6 angle-top-right"> 
                    <div className="uk-grid-small uk-flex-middle uk-margin-small-bottom uk-grid" uk-grid> 
                      <div className="uk-width-1-4  uk-first-column"> 
                        <img src={avatar} alt="Image" className="uk-align-center uk-border-circle" /> 
                      </div>                                     
                      <div className="uk-width-3-4"> 
                        <p className="uk-margin-remove-bottom uk-margin-small-top uk-text-bold"> Hamse Mohamoud</p> 
                        <p className="uk-margin-remove-top uk-text-small uk-margin-small-bottom"> Bankook China</p> 
                      </div>                                     
                    </div>                                 
                    <ul className="uk-nav uk-dropdown-nav"> 
                      <li> 
                        <a href="Profile.html"> <i className="fas fa-user uk-margin-small-right" /> Profile</a> 
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
                        <a href="#"> <i className="fas fa-sign-out-alt uk-margin-small-right" /> Log out</a> 
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </li>                         
              </ul>                     
            </div>           

      </div>
    );
  }
}

export default ProfileNavbarComponent;