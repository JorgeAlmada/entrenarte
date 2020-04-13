import React, { Component } from 'react';
import './CreateLessonComponent.css';
const axios = require('axios');
const Swal = require('sweetalert2');


class CreateLessonComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      video : "",
      id : "",
      file : "",
      img: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateLesson = this.handleCreateLesson.bind(this);
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

  handleCreateLesson(event) {
    event.preventDefault();
    var self = this;
    console.log("We in?")
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    const formData = new FormData();
    formData.append('myFile', this.state.img);
    formData.append('name', this.state.name);
    formData.append('video', this.state.video);
    formData.append('file', this.state.file);
    formData.append('sectionId', this.props.lessonsection);
    if(this.props.lessontoedit.id){
    formData.append('id', this.props.lessontoedit.id);
    axios.post(
      'http://localhost:8000/courses/updatelesson',
      formData,
      config
      )
    .then(function (response) {
      let respuesta = response.data[0];
      Swal.fire(
        'Success',
        'Se ha modificado la leccion ',
        'success'
      );
      let randomString = Math.random().toString(36);
      self.setState({
        name : "",
        video : "",
        id : "",
        img: null,
        theInputKey : randomString,
        file : ""
      })
      self.props.lessonUpdatedSuccess(respuesta, self.props.sectionposition ,self.props.courseposition)
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
    } else{
    axios.post(
      'http://localhost:8000/courses/createlesson',
      formData,
      config
      )
    .then(function (response) {
      console.log(response);
      Swal.fire(
        'Success',
        'Se ha creado la leccion.',
        'success'
      )
      let randomString = Math.random().toString(36);
      self.setState({
        name : "",
        video : "",
        id : "",
        img : null,
        theInputKey : randomString,
        file: ""
      })
      self.props.lessonCreatedSuccess(response.data, self.props.sectionposition, self.props.courseposition)
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
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  componentDidUpdate(prevProps, prevState){
    if (prevProps.lessontoedit !== this.props.lessontoedit) {
      if (this.props.lessontoedit.id){
        this.setState({
          name: this.props.lessontoedit.name,
          video: this.props.lessontoedit.video,
          id : this.props.lessontoedit.id,
          file : this.props.lessontoedit.file
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
                  <i className="fas fa-user uk-margin-small-right" /> New Lesson
                </div>                     
                <div className="uk-card-body "> 
                  <div className="uk-grid">                           
                    <div className="uk-width-2-3@m"> 
                      <form className="uk-grid-small"  onSubmit={this.handleCreateLesson}> 
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Lesson Name</div>                                         
                          <input className="uk-input" type="text" placeholder="Name of the Lesson" value={this.state.name} name="name" onChange={this.handleChange} minLength="5" required/> 
                        </div>                                     
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Lesson Video </div>                                         
                          <input className="uk-input" type="text" placeholder="The video for the lesson" value={this.state.video} name="video" onChange={this.handleChange} minLength="5" required/> 
                        </div>     
                        <div className="dropzone" id="y-awesome-dropzone" style={{marginTop: "15px"}}>
                              <div className="fallback"> 
                              <div className="uk-form-label"> Archivo de leccion (opcional)</div>  
                                <input name="img" type="file" multiple onChange={this.handleChange} key={this.state.theInputKey || ''}/>  
                              </div>    
                            </div>                                 
                        <div className="uk-width-1-2">
                          <br/>
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

export default CreateLessonComponent;