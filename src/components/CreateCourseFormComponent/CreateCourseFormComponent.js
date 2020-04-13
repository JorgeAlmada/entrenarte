import React, { Component } from 'react';
import Switch from 'react-switch';
import './CreateCourseFormComponent.css';

const axios = require('axios');
const Swal = require('sweetalert2');


class CreateCourseFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      description : "",
      about: "",
      id: "",
      private: false,
      newcourse: {},
      img: null,
      imgpath: "",
      video: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateCourse = this.handleCreateCourse.bind(this);
    this.printMe = this.printMe.bind(this);
    this.handleChangeSwitch = this.handleChangeSwitch.bind(this);
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

  handleChangeSwitch(){
    this.setState({
      private: !this.state.private
    })
  }

  handleCreateCourse(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const self = this;
    const formData = new FormData();
    formData.append('myFile', this.state.img);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('about', this.state.about);
    formData.append('private', this.state.private);
    formData.append('userId', localStorage.getItem('id'));
    formData.append('img', this.state.imgpath);
    formData.append('video', this.state.video);
    const config = {
      headers: { token: token },
      'content-type' : 'multipart/form-data'
    };
    if(this.props.coursetoedit.id){
    formData.append('id', this.state.id);
    axios.post(
      'http://localhost:8000/courses/updatecourse',
      formData,
      config
      )
    .then(function (response) {
      console.log(response.data);
      let respuesta = response.data[0];
      Swal.fire(
        'Success',
        'Se ha modificado el curso ',
        'success'
      );
      let randomString = Math.random().toString(36);

      self.setState({
        name : "",
        description : "",
        about: "",
        id: "",
        private: false,
        theInputKey: randomString,
        img : null,
        imgpath: "",
        video: ""
      })
      self.props.courseUpdatedSuccess(respuesta)
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
    } else {
      axios.post(
        'http://localhost:8000/courses/createcourse',
        formData,
        config
        )
    .then(function (response) {
      console.log(response.data);
      Swal.fire(
        'Success',
        'Se ha creado el curso ',
        'success'
      );
      let randomString = Math.random().toString(36);

      self.setState({
        name : "",
        description : "",
        about: "",
        id: "",
        private: false,
        theInputKey: randomString,
        img : null,
        imgpath: "",
        video: ""
      })
      self.props.courseCreatedSuccess(response.data)
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
  }

  // componentWillMount(){}
  componentDidMount(){
    console.log(this.props)
  }

  printMe(){
    console.log(this.props)
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  componentDidUpdate(prevProps, prevState){
    if (prevProps.coursetoedit !== this.props.coursetoedit) {
      if (this.props.coursetoedit.id){
        this.setState({
          name: this.props.coursetoedit.name,
          description: this.props.coursetoedit.description,
          about: this.props.coursetoedit.about,
          id : this.props.coursetoedit.id,
          private : this.props.coursetoedit.private,
          imgpath : this.props.coursetoedit.img,
          video : this.props.coursetoedit.video
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div className="admin-content-inner"> 
              <div className="uk-card-small uk-card-default" style={{marginBottom: '15px'}}> 
                <div className="uk-card-header uk-text-bold">
                  <i className="fas fa-user uk-margin-small-right" /> New Course
                </div>                     
                <div className="uk-card-body "> 
                  <div className="uk-grid">                           
                    <div className="uk-width-2-3@m"> 
                      <form className="uk-grid-small"  onSubmit={this.handleCreateCourse}> 
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Course Name</div>                                         
                          <input className="uk-input" type="text" placeholder="Name of the course" value={this.state.name} name="name" onChange={this.handleChange} minLength="5" required/> 
                        </div>                                     
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Course Description </div>                                         
                          <input className="uk-input" type="text" placeholder="A small description about your course" value={this.state.description} name="description" onChange={this.handleChange} minLength="5" required/> 
                        </div>    
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Course Preview Video </div>                                         
                          <input className="uk-input" type="text" placeholder="A video preview for your course" value={this.state.video} name="video" onChange={this.handleChange} minLength="5" required/> 
                        </div>                                    
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> About this course</div>                                         
                          <input className="uk-input" type="text" placeholder="An introduction to this course" value={this.state.about} name="about" onChange={this.handleChange} required/> 
                            <div style={{display: "flex", marginTop: "15px"}}>
                              <Switch 
                              checked={this.state.private}
                              onChange={this.handleChangeSwitch} 
                              />
                              <div className="uk-form-label" style={{marginLeft: "10px"}}> Private</div>   
                            </div>
                            <div className="dropzone" id="y-awesome-dropzone" style={{marginTop: "15px"}}>
                              <div className="fallback"> 
                                <input name="img" type="file" multiple onChange={this.handleChange} key={this.state.theInputKey || ''}/> 
                              </div>    
                             
                            </div> 

                          <input className="uk-button uk-button-grey  uk-margin" type="submit" defaultValue="Sign in" />  
                        </div>                                                                                                        
                      </form>                                 
                    </div>                             
                  </div>                         
                </div>                     
              </div>                 
            </div>    
      </div>
    );
  }
}

export default CreateCourseFormComponent;