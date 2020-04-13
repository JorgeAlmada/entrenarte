import React, { Component } from 'react';
import './CourseSectionLessonComponent.css';
import imagevideo from '../../assets/images/courses/course-lesson-video-list.jpg'
import axios from 'axios'

class CourseSectionLessonComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       loading: true,
       section: [],
       lessons : []
     };
   }

  // componentWillMount(){}
  componentDidMount(){
    // axios.get(`http://localhost:8000/courses/getsection`)
    //   .then(res => {
    //     const section = res.data[0];
    //     this.setState({ 
    //       section : section,
    //       lessons : section.lessons,
    //       loading: false
    //     });
    //     console.log(this.state.sections);
    //   })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedSection !== this.props.selectedSection) {
      const section = this.props.selectedSection;
      this.setState({ 
        section : section,
        lessons : section.lessons,
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

    // Preloader
    

    return (
      <div>
        <div id="note">
          Congratulations you hava successfully register this Course Enjoy it. 
          <a className="uk-margin-medium-right uk-margin-remove-bottom uk-position-relative uk-icon-button uk-align-right  uk-margin-small-top" uk-toggle="target: #note; cls:uk-hidden"> <i className="fas fa-times  uk-position-center" /> </a>
        </div>         
        <div className="tm-course-lesson">
          {/* mobile-sidebar  */}
          <i className="fas fa-video icon-large tm-side-right-mobile-icon uk-hidden@m" uk-toggle="target: #filters" />
          <div className="uk-grid-collapse uk-grid" id="course-fliud" uk-grid>
            <div className="uk-width-3-4@m uk-margin-auto">
              <header className="tm-course-content-header uk-background-grey"> 
                <a onClick = {() => this.props.changeWindow("coursedashboard")} className="back-to-dhashboard uk-margin-small-left" uk-tooltip="title: Back to Course Dashboard  ; delay: 200 ; pos: bottom-left ;animation:uk-animation-scale-up ; offset:20"> Course Dashboard</a> 
                {/*  night mode  */}                         
                <span className="btn-night-lesson uk-margin-medium-right"><i className="fas fa-moon" /> </span>
                <div uk-drop="pos: top-right ;mode:click ; offset: 20;animation: uk-animation-scale-up" className="uk-drop"> 
                  <div className="uk-card-small uk-box-shadow-xlarge uk-card-default uk-maring-small-left  border-radius-6"> 
                    <div className="uk-card uk-card-default border-radius-6"> 
                      <div className="uk-card-header"> 
                        <h5 className="uk-card-title uk-margin-remove-bottom">Swich to night mode</h5> 
                      </div>                                     
                      <div className="uk-card-body"> 
                        <p>Turns the light surfaces of the page dark, creating an experience ideal for night. Try it!</p> 
                        <p className="uk-text-small uk-align-left uk-margin-remove  uk-text-muted">DARK THEME </p> 
                        {/* night mode button */}                                         
                        <div className="btn-night uk-align-right" id="night-mode"> 
                          <label className="tm-switch"> 
                            <div className="uk-switch-button" />                                                 
                          </label>                                             
                        </div>                                         
                        {/* end  night mode button */}                                         
                      </div>                                     
                    </div>                                 
                  </div>                             
                </div>
              </header>
              {/*Course-side icon make Hidden sidebar */}
              <i className="fas fa-angle-right icon-large uk-float-right tm-side-course-icon  uk-visible@m" uk-toggle="target: #course-fliud; cls: tm-course-fliud" uk-tooltip="title: Hide sidebar  ; delay: 200 ; pos: bottom-right ;animation:uk-animation-scale-up ; offset:20" />
              {/*Course-side active icon */}
              <i className="fas fa-angle-right icon-large uk-float-right tm-side-course-active-icon uk-visible@m" uk-toggle="target: #course-fliud; cls: tm-course-fliud" uk-tooltip="title: Open sidebar  ; delay: 200 ; pos: bottom-right ;animation:uk-animation-scale-up ; offset:20" />
              {/* PreLoader */}                     
              <div id="spinneroverlay" style={{display: this.state.loading ? "block" : "none"}}> 
                <div className="spinner" />                         
              </div>                     
              <ul id="component-nav" className="uk-switcher uk-position-relative">
                {/*  Lesson one */}
                {this.state.lessons.map((lesson, index) => {
                  return (
                    <li key= {index} >
                      <div className="navigation-controls">
                        <a href="#" className="previous uk-animation-fade" uk-switcher-item="previous" uk-tooltip="title: Previous Video  ; pos: right ;animation:uk-animation-scale-up ; offset:20"><i className="fas fa-angle-left" /> </a>
                        <a href="#" className="next uk-animation-fade" uk-switcher-item="next" uk-tooltip="title: Next Video  ; pos: left ;animation:uk-animation-scale-up ; offset:20"><i className="fas fa-angle-right" /> </a>
                      </div>
                      <div className="video-responsive">
                        <iframe src={lesson.video} frameBorder={0} uk-video="" allowFullScreen uk-responsive />
                      </div>                             
                    </li>
                  )
                })}
              </ul>                     
            </div>
            <div className="uk-width-1-4@m uk-offcanvas tm-filters uk-background-default tm-side-course uk-animation-slide-right-medium uk-overflow-hidden" id="filters" uk-offcanvas="overlay: true; container: false; flip: true">
              <div className="uk-offcanvas-bar uk-padding-remove uk-preserve-color">
                {/* Sidebar menu*/}                         
                <ul className="uk-child-width-expand uk-tab tm-side-course-nav uk-margin-remove uk-position-z-index" uk-switcher="animation: uk-animation-slide-right-medium, uk-animation-slide-left-small" style={{boxShadow: '0px 0px 7px 1px gainsboro'}}>
                  <li className="uk-active">
                    <a href="#" uk-tooltip="title: Course Videos ; delay: 200 ; pos: bottom-left ;animation:uk-animation-scale-up"> <i className="fas fa-video icon-medium" />  Videos </a>
                  </li>                           
                </ul>
                {/* Sidebar contents */}                         
                <ul className="uk-switcher">
                  {/* Course Video tab  */}                             
                  <li> 
                    <div className="demo1" data-simplebar> 
                      <ul className="course-list video-list" uk-switcher="connect: #component-nav; animation: uk-animation-slide-right-small, uk-animation-slide-left-medium">
                        {/*  Lesson one */}
                        { this.state.lessons.map((lesson, index) => {
                          return (
                          <li key={index}>
                          <a href="#">
                            <img src={imagevideo} alt="" />
                            <i className="fas fa-play-circle play-icon" />
                            <span className="now-playing">Now Playing</span>
                            <span className="uk-text-truncate">{lesson.name}</span>
                            <time>2 min. 20 sec.</time>
                          </a>
                          </li>)
                        })
                        }                                                                         
                      </ul>
                    </div>
                  </li>                           
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseSectionLessonComponent;