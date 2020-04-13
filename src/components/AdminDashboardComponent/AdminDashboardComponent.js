import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router'
import './AdminDashboardComponent.css';
import avatar1 from "../../assets/images/avatures/avature-1.png";
import avatar2 from "../../assets/images/avatures/avature-2.png";
import avatar3 from "../../assets/images/avatures/avature-3.png";
import avatar4 from "../../assets/images/avatures/avature-4.png";
import cardsbg from "../../assets/images/admin/cards-bg.jpg";
require('../../assets/css/uikit.css');
require('../../assets/css/main.css');
require('../../assets/css/admin.css');
require('../../assets/css/fontawesome.css');
require('../../assets/js/simplebar.js');
require('../../assets/js/uikit.js');

class AdminDashboardComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       firstname : "",
       lastname: ""
     };
   }

  // componentWillMount(){}
  componentDidMount(){
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    this.setState({
      firstname : firstname,
      lastname: lastname
    })
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

    render() {
      return <div>
          {/* sidebar */}             
          {/* mobile  header */}             
          {/* main contant */}         
          <div className="admin-content"> 
            <div className="admin-content-inner"> 
              <div className="uk-child-width-1-3@m uk-child-width-1-2 uk-grid-match  uk-grid"> 
                <div> 
                  <div className="uk-background-cover uk-light dashboard-card" data-src={cardsbg} uk-img> 
                    <i className="fas fa-play icon-xxlarge uk-visible@m" /> 
                    <h3> 32 Course </h3> 
                    <p> pro detracto disputando reformidans at</p> 
                    <a href="#"> View All </a>
                  </div>                         
                </div>                     
                <div> 
                  <div className="uk-background-cover uk-light dashboard-card" data-src={cardsbg} uk-img> 
                    <i className="far fa-user icon-xxlarge uk-visible@m" /> 
                    <h3> 120 User </h3> 
                    <p>  pro detracto disputando reformidans at </p> 
                    <a href="#"> View All </a>
                  </div>                         
                </div>                     
                <div> 
                  <div className="uk-background-cover uk-light dashboard-card" data-src={cardsbg} uk-img> 
                    <i className="fas fa-code icon-xxlarge uk-visible@m" /> 
                    <h3> 10 Script </h3> 
                    <p>  pro detracto disputando reformidans at </p> 
                    <a href="#"> View All </a>
                  </div>                         
                </div>                     
              </div>
              <div className=" uk-grid">
                <div className="uk-width-1-2@m"> 
                  <div className="uk-card-small uk-card-default"> 
                    <div className="uk-card-header uk-text-bold">
                      <i className="fas fa-users uk-margin-small-right" /> Latest  Regsiter users 
                    </div>                                 
                    <div className="uk-card-body uk-padding-remove-top"> 
                      <div className="uk-child-width-1-4@m uk-child-width-1-2 uk-grid-collapse uk-flex-center uk-grid" uk-scrollspy="target: > div; cls:uk-animation-scale-up; delay: 100">
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar1} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Quen smith</h5>  
                            </div> 
                          </a>                          
                        </div>  
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar2} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">John smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar3} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Sakhay smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar4} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Quen smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar3} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Moli smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar2} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Quen smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                        <div>
                          <a href="Profile.html" className="uk-link-reset">
                            <div className="uk-padding-remove   uk-text-center"> 
                              <img alt="Image" className="uk-width-2-3 uk-margin-top uk-margin-small-bottom uk-border-circle uk-align-center uk-box-shadow-large" src={avatar1} />
                              <h5 className="uk-margin-remove-bottom uk-margin-remove-top ">Quen smith</h5>  
                            </div> 
                          </a>                          
                        </div>
                      </div>
                    </div>                                 
                  </div>                             
                </div> 
                <div className="uk-width-1-2@m">
                  <div className="uk-card-small uk-card-default"> 
                    <div className="uk-card-header uk-text-bold">
                      <i className="fas fa-comment uk-margin-small-right" /> Latest  Comments   
                    </div>                                 
                    <div className="uk-card-body">
                      <img className="user-profile-medium uk-align-left uk-margin-small-right uk-margin-small-bottom" src={avatar1} width={60} alt="Example image" /> 
                      <p className="uk-margin-remove-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>  
                      <hr />
                      <img className="user-profile-medium uk-align-left uk-margin-small-right uk-margin-small-bottom" src={avatar1} width={60} alt="Example image" /> 
                      <p className="uk-margin-remove-top">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> 
                      <hr />
                      <img className="user-profile-medium uk-align-left uk-margin-small-right uk-margin-small-bottom" src={avatar1} width={60} alt="Example image" /> 
                      <p className="uk-margin-remove-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>             
          </div>         
        </div>
  }
}

export default AdminDashboardComponent;