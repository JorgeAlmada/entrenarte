import React, { Component } from 'react';
import './SidenavComponent.css';

class SidenavComponent extends Component {
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
        <div className="side-nav uk-animation-slide-left-medium" id="side-nav"> 
          {/*Mobile icon wiill close nav-side   */}             
          <span className="uk-animation-fade tm-mobile-close-icon" uk-toggle="target: #side-nav; cls: side-nav-active"> <i className="fas fa-times icon-large" /></span> 
          <div id="side-nav"> 
            <div className="side-nav-bg" />                 
            <div className="uk-navbar-left uk-visible@s"> 
              <a className="uk-logo"> <i className="fas fa-graduation-cap" /> </a> 
            </div>                 
            {/* <ul> 
              <li> 
                <a href="#"> <i className="fas fa-play" /> </a> 
                <div className="side-menu-slide"> 
                  <div className="side-menu-slide-content"> 
                    <ul data-simplebar> 
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="far fa-credit-card icon-medium" /> Web Development </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-briefcase icon-medium" />  Business </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-box icon-medium" />    IT &amp; Software </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-pencil-ruler icon-medium" />    Office Productivity </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-brain icon-medium" />   Personal Development </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-bullhorn icon-medium" />  Marketing </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="far fa-life-ring icon-medium" />  Life Style</a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-camera icon-medium" />  Photography</a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-briefcase-medical icon-medium" />   Health &amp; Fitness </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-music icon-medium" />   Music </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-shopping-bag icon-medium" />  Ecommerce</a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-utensils icon-medium" />  Food &amp; cooking </a> 
                      </li>                                     
                      <li> 
                        <a href="Browse_all_webdevelopment.html"> <i className="fas fa-universal-access icon-medium" />  Teaching &amp; academy </a> 
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </div>                         
              </li>                     
              <li> 
                <a href="books.html" uk-tooltip="title: Books ; delay: 500 ; pos: right ;animation:	uk-animation-scale-up"> <i className="fas fa-book-open" /> </a> 
              </li>                     
              <li>                        
                <a href="#"> <i className="fas fa-code" /> </a> 
                <div className="side-menu-slide"> 
                  <div className="side-menu-slide-content"> 
                    <ul> 
                      <li> 
                        <a href="Scripts.html"> <i className="fas fa-code icon-medium" /> Browse All Scripts </a> 
                      </li>                                     
                      <li> 
                        <a href="Scripts_single_page.html"> <i className="fab fa-wordpress icon-medium" />   Cms Plugins </a> 
                      </li>                                     
                      <li> 
                        <a href="Scripts_single_page.html"> <i className="fab fa-php icon-medium" />   PHP Scripts </a> 
                      </li>                                     
                      <li> 
                        <a href="Scripts_single_page.html"> <i className="fab fa-wordpress-simple icon-medium" /> Cms themes </a> 
                      </li>                                     
                      <li> 
                        <a href="Scripts_single_page.html"> <i className="fab fa-html5 icon-medium" /> Html templates</a> 
                      </li>                                     
                      <li> 
                        <a href="Scripts_single_page.html"> <i className="fab fa-android icon-medium" />  Apps Source codes </a> 
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </div>                         
              </li>                     
              <li> 
                <a href="Discussion.html" className="active" uk-tooltip="title: Discussion ; delay: 500 ; pos: right ;animation:	uk-animation-scale-up"> <i className="fas fa-comment-alt" /> </a> 
              </li>                     
              <li>                        
                <a href="Blog.html" className="active" uk-tooltip="title: Blogs ; delay: 500 ; pos: right ;animation:	uk-animation-scale-up"> <i className="fas fa-file-alt" /> </a> 
              </li>                     
              <li>                       
                <a href="#"> <i className="fas fa-columns" /> </a> 
                <div className="side-menu-slide"> 
                  <div className="side-menu-slide-content"> 
                    <ul uk-accordion> 
                      <li className="uk-open"> 
                        <a href="ui-components.html" className="uk-accordion-title"> <i className="fas fa-layer-group" /> Ui Elements </a> 
                        <div className="uk-accordion-content uk-margin-remove-top"> 
                          <a href="ui-elements.html"> 
                            Breadcrumb</a> 
                          <a href="ui-elements.html"> 
                            Card </a> 
                          <a href="ui-elements.html"> 
                            Dropdown </a> 
                          <a href="ui-elements.html"> 
                            Forum </a> 
                          <a href="ui-elements.html"> 
                            Grid</a> 
                          <a href="ui-elements.html"> 
                            Nav </a> 
                          <a href="ui-elements.html"> 
                            Heading</a> 
                          <a href="ui-elements.html"> 
                            Pagination</a> 
                        </div>                                         
                      </li>                                     
                      <li className=" uk-margin-remove-top"> 
                        <a href="ui-components.html" className="uk-accordion-title"> <i className="fas fa-layer-group" /> Ui Compounents</a> 
                        <div className="uk-accordion-content uk-margin-remove-top"> 
                          <a href="ui-components.html"> 
                            Modal</a> 
                          <a href="ui-components.html"> 
                            Slideshow </a> 
                          <a href="ui-components.html"> 
                            Tooltip </a> 
                          <a href="ui-components.html"> 
                            Accordian </a> 
                          <a href="ui-components.html"> 
                            Toggle</a> 
                          <a href="ui-components.html"> 
                            Swicher </a> 
                        </div>                                         
                      </li>                                     
                      <li className=" uk-margin-remove-top"> 
                        <a href="ui-helpers.html" className="uk-accordion-title"> <i className="fas fa-layer-group" /> Ui Helpers </a> 
                        <div className="uk-accordion-content uk-margin-remove-top"> 
                          <a href="ui-helpers.html"> 
                            Text</a> 
                          <a href="ui-helpers.html"> 
                            Padding </a> 
                          <a href="ui-helpers.html"> 
                            Margin </a> 
                          <a href="ui-helpers.html"> 
                            Bacgkround </a> 
                          <a href="ui-helpers.html"> 
                            Alingn </a> 
                        </div>                                         
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </div>                         
              </li>                     
              <li>                       
                <a href="#"> <i className="fas fa-clone" /> </a> 
                <div className="side-menu-slide"> 
                  <div className="side-menu-slide-content"> 
                    <ul> 
                      <li> 
                        <a href="pages-about.html"> <i className="fas fa-question" />   About</a> 
                        <div uk-drop="pos: right-center;animation: uk-animation-slide-left-medium" className="uk-drop uk-drop-right-center"> 
                          <div className="uk-card  uk-box-shadow-xlarge uk-card-default uk-maring-small-left"> 
                            <img src="../assets/images/demos/pages-about.jpg" alt="" /> 
                            <p className="uk-padding-small uk-margin-remove"> About Page is : ipsum dolor sit amet, consectetur adipiscing elit.. </p> 
                          </div>                                             
                        </div>                                         
                      </li>                                     
                      <li> 
                        <a href="pages-faq.html"> <i className="fas fa-comment-alt" /> FAQ</a> 
                        <div uk-drop="pos: right-center;animation: uk-animation-slide-left-medium" className="uk-drop uk-drop-right-center"> 
                          <div className="uk-card  uk-box-shadow-xlarge uk-card-default uk-maring-small-left"> 
                            <img src="../assets/images/demos/pages-faq.jpg" alt="" /> 
                            <p className="uk-padding-small uk-margin-remove">  FAQ is : ipsum dolor sit amet, consectetur adipiscing elit </p> 
                          </div>                                             
                        </div>                                         
                      </li>                                     
                      <li> 
                        <a href="pages-terms.html"> <i className="fas fa-comment-dots" />  Terms &amp; Services </a> 
                        <div uk-drop="pos: right-center;animation: uk-animation-slide-left-medium" className="uk-drop uk-drop-right-center"> 
                          <div className="uk-card  uk-box-shadow-xlarge uk-card-default uk-maring-small-left"> 
                            <img src="../assets/images/demos/pages-terms.jpg" alt="" /> 
                            <p className="uk-padding-small uk-margin-remove">  Term Services ipsum dolor sit amet, consectetur adipiscing elit </p> 
                          </div>                                             
                        </div>                                         
                      </li>                                     
                      <li> 
                        <a href="pages-help.html"> <i className="fas fa-comments" /> Help </a> 
                        <div uk-drop="pos: right-center;animation: uk-animation-slide-left-medium" className="uk-drop uk-drop-right-center"> 
                          <div className="uk-card  uk-box-shadow-xlarge uk-card-default uk-maring-small-left"> 
                            <img src="../assets/images/demos/pages-help.jpg" alt="" /> 
                            <p className="uk-padding-small uk-margin-remove">  help Page ipsum dolor sit amet, consectetur adipiscing elit </p> 
                          </div>                                             
                        </div>                                         
                      </li>                                     
                    </ul>                                 
                  </div>                             
                </div>                         
              </li>                     
            </ul>                  */}
            <ul className="uk-position-bottom"> 
              <li> 
                {/* Lunch information box */}                         
                <a href="#" uk-tooltip="title: Lunch information box ; delay: 500 ; pos: right ;animation:	uk-animation-scale-up" uk-toggle="target: #infoBox; cls: infoBox-active"><i className="fas fa-question" /> </a> 
              </li>                     
              <li> 
                {/* Night mode button  */}                         
                <a href="#" uk-tooltip="title: Night mode ; delay: 500 ; pos: right ;animation:	uk-animation-scale-up"> <i className="fas fa-moon" /> </a> 
                <div uk-drop="pos: right-bottom ;mode:click ; offset: 10;animation: uk-animation-slide-left-medium" className="uk-drop"> 
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
              </li>                     
            </ul>                 
          </div>             
        </div>    

      </div>
    );
  }
}

export default SidenavComponent;