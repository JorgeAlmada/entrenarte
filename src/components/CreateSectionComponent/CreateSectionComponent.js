import React, { Component } from 'react';
import './CreateSectionComponent.css';
const axios = require('axios');
const Swal = require('sweetalert2');


class CreateSectionComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : "",
      img : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateSection = this.handleCreateSection.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCreateSection(event) {
    var self = this;
    const body = this.state;
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    event.preventDefault();
    if(this.props.sectiontoedit.id) {
    axios.post(
      'http://localhost:8000/courses/updatesection',
      body,
      config
      )
    .then(function (response) {
      console.log(response.data);
      Swal.fire(
        'Success',
        'Se ha modificado la seccion ',
        'success'
      );
      self.setState({
        name: "",
        img: ""
      })
      self.props.sectionUpdatedSuccess(body, self.props.courseposition)
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
      body.courseId = this.props.sectioncourse;
      axios.post(
        'http://localhost:8000/courses/createsection',
        body,
        config
      )
    .then(function (response) {
      console.log(response);
      Swal.fire(
        'Success',
        'Se ha creado la sección.',
        'success'
      )
      self.setState({
        name: "",
        img: ""
      })
      console.log(self.props.courseposition)
      self.props.sectionCreatedSuccess(response.data, self.props.courseposition);
    })
    .catch(function (error) {
      console.log(error);
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
    if (prevProps.sectiontoedit !== this.props.sectiontoedit) {
      if (this.props.sectiontoedit.id){
        this.setState({
          name: this.props.sectiontoedit.name,
          img: this.props.sectiontoedit.img,
          id : this.props.sectiontoedit.id
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
                  <i className="fas fa-user uk-margin-small-right" /> New Section
                </div>                     
                <div className="uk-card-body "> 
                  <div className="uk-grid">                           
                    <div className="uk-width-2-3@m"> 
                      <form className="uk-grid-small"  onSubmit={this.handleCreateSection}> 
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Section Name</div>                                         
                          <input className="uk-input" type="text" placeholder="Name of the Section" value={this.state.name} name="name" onChange={this.handleChange} minLength="5" required/> 
                        </div>                                     
                        <div className="uk-width-1-2"> 
                          <div className="uk-form-label"> Section Image </div>                                         
                          <input className="uk-input" type="text" placeholder="An image for the section" name="img" value={this.state.img} onChange={this.handleChange} minLength="5" required/> 
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

export default CreateSectionComponent;