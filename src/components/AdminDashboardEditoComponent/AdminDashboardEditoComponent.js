import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router'
import './AdminDashboardEditoComponent.css';
require('../../assets/css/uikit.css');
require('../../assets/css/main.css');
require('../../assets/css/admin.css');
require('../../assets/css/fontawesome.css');
require('../../assets/js/simplebar.js');
require('../../assets/js/uikit.js');
const axios = require('axios');
const Swal = require('sweetalert2');

class AdminDashboardComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       oldpassword: "",
       password: "",
       passwordconfirm: "",
       firstname: "",
       lastname: "",
       email: "",
       firstnamedisplay: "",
       lastnamedisplay: "",
       img: null
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePsw = this.handleChangePsw.bind(this);
    this.handleChangeProfile = this.handleChangeProfile.bind(this);
   }

  handleChange(event) {
    if(event.target.files) {
      this.setState({
        [event.target.name]: event.target.files[0]
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  handleChangePsw(event) {
    const body = this.state;
    body.id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    event.preventDefault();
    axios.post(
      'http://localhost:8000/user/changepassword',
      body,
      config
      )
    .then(function (response) {
      console.log(response.data[0]);
      Swal.fire(
        'Success',
        'La contraseña ha sido cambiada satisfactoriamente',
        'success'
      )
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
    .finally(function () {
      // always executed
    });  
  }

  handleChangeProfile(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const self = this;
    const formData = new FormData();
    formData.append('myFile', this.state.img);
    formData.append('firstname', this.state.firstname);
    formData.append('lastname', this.state.lastname);
    formData.append('email', this.state.email);
    formData.append('id', localStorage.getItem('id'));
    formData.append('img', localStorage.getItem('img'))
    const config = {
      headers: { token: token },
      'content-type' : 'multipart/form-data'
    };
    axios.post(
      'http://localhost:8000/user/changeprofile',
      formData,
      config
      )
    .then(function (response) {
      let respuesta = response.data[0];
      Swal.fire(
        'Success',
        'Su perfil de usuario ha sido actualizado.',
        'success'
      )
      self.props.updateProfile(respuesta);
      let randomString = Math.random().toString(36);

      self.setState({
        theInputKey: randomString,
        img : null
      });
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
    .finally(function () {
      // always executed
    });  
  }

  // componentWillMount(){}
  componentDidMount(){
    const firstname = localStorage.getItem('firstname');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');
    this.setState({
      firstnamedisplay: firstname,
      lastnamedisplay: lastname,
      firstname: firstname,
      lastname: lastname,
      email: email
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
          <div className="admin-mobile-headder uk-hidden@m"> 
            <span uk-toggle="target: #admin-side; cls: admin-side-active" className="uk-padding-small uk-text-white uk-float-right"><i className="fas fa-bars" /></span> 
            <a className="uk-logo" href="index.html"> <i className="fas fa-graduation-cap"> </i> CoursePlus </a> 
          </div>         
          {/* main contant */}         
          <div className="admin-content"> 
            {/* navbar */}                     
            <div className="admin-content-inner"> 
              <div className="uk-card-small uk-card-default" style={{marginBottom: '15px'}}> 
                <div className="uk-card-header uk-text-bold">
                  <i className="fas fa-user uk-margin-small-right" /> Profile details 
                </div>                     
                <form className="uk-grid-small" onSubmit={this.handleChangeProfile}> 
                <div className="uk-card-body "> 
                  <div className="uk-grid"> 
                    <div className="uk-width-1-3@m"> 
                      <img src={this.props.profileimg} alt="" className="uk-border-circle" style={{height: "50%", width: "50%", marginLeft: "auto", marginRight: "auto", display: "block"}} /> 
                      {/* <form action="/file-upload" className="dropzone"  id="y-awesome-dropzone">  */}
                      <div className="dropzone" id="y-awesome-dropzone" style={{marginTop: "15px"}}>
                        <div className="fallback"> 
                          <input name="img" type="file" multiple onChange={this.handleChange} key={this.state.theInputKey || ''}/> 
                        </div>    
                      </div>                                 
                      <p>Recomend size 50 x 50</p>
                    </div>                             
                    <div className="uk-width-2-3@m"> 
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Name</div>                                         
                          <input className="uk-input" type="text" placeholder="Your Name" name="firstname" value={this.state.firstname} onChange={this.handleChange} required minLength="5"/> 
                        </div>                                     
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Last name </div>                                         
                          <input className="uk-input" type="text" placeholder="Your Last name" name="lastname" value={this.state.lastname} onChange={this.handleChange} required minLength="5"/> 
                        </div>                                     
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Email</div>                                         
                          <input className="uk-input" type="email" placeholder="Your Email" name="email" value={this.state.email} onChange={this.handleChange} required/> 
                          <input className="uk-button uk-button-grey  uk-margin" type="submit" defaultValue="Sign in" />  
                        </div>                                                                                                                                      
                    </div>                             
                  </div>                         
                </div>  
                </form>                   
              </div>       
              <form onSubmit={this.handleChangePsw}>          
                <div className="uk-margin-medium"> 
                  <div className="uk-grid"> 
                                          
                    <div className="uk-width-1-2@m"> 
                      <div className="uk-card-small uk-card-default"> 
                        <div className="uk-card-header uk-text-bold"> 
                          <i className="fas fa-lock uk-margin-small-right" /> Change password 
                        </div>                                 
                        <div className="uk-card-body uk-padding-remove-top"> 
                          <div className="uk-form-label"> Old password</div>                                     
                          <input className="uk-input" type="text" name="oldpassword" value={this.state.oldpassword} onChange={this.handleChange} required/> 
                          <div className="uk-form-label"> New password</div>                                     
                          <input className="uk-input" type="text" name="password" value={this.state.password} onChange={this.handleChange} required minLength="8"/> 
                          <div className="uk-form-label"> Confirm new password</div>                                     
                          <input className="uk-input" type="text" name="passwordconfirm" value={this.state.passwordconfirm} onChange={this.handleChange} required minLength="8"/> 
                        </div>                                 
                      </div>                             
                    </div>                         
                  </div>                     
                  <input className="uk-button uk-button-grey  uk-margin" type="submit" defaultValue="Sign in" /> 
                </div>    
              </form>             
            </div>             
          </div>
          </div>
    }
}

export default AdminDashboardComponent;