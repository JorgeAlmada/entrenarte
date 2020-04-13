import React, { Component } from 'react';
import { Modal, Table, Tabs, Tab } from 'react-bootstrap';
import './StudentsModalComponent.css';
const axios = require('axios');
const Swal = require('sweetalert2');

class StudentsModalComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      users : [],
      activeusers: []
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(user, index){
    const token = localStorage.getItem('token');
    const body = {
      userId : user.id,
      courseId : this.props.courseformodal
    };
    const self = this;
    const config = {
      headers: { token: token }
    };
    axios.post(
      'http://localhost:8000/courses/newusercourse',
      body,
      config
      )
    .then(function (response) {
      console.log(response.data);
      Swal.fire(
        'Success',
        'Se ha registrado al usuario satisfactoriamente',
        'success'
      );
      var newArray = self.state.activeusers.slice();
      newArray.push(user);
      let newState = self.state.users.filter(function(value, indice, arr) {return indice !== index});
      self.setState({
        users : newState,
        activeusers : newArray
      })
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
  }

  handleDelete(user, index){
    const token = localStorage.getItem('token');
    const body = {
      userId : user.id,
      courseId : this.props.courseformodal
    };
    const config = {
      headers: { token: token }
    };
    const self = this;
    axios.post(
      'http://localhost:8000/courses/deleteusercourse',
      body,
      config
      )
    .then(function () {
      let newState = self.state.activeusers.filter(function(value, indice, arr) {return indice !== index});
      var newArray = self.state.users.slice();
      newArray.push(user);
      self.setState({
        activeusers : newState,
        users : newArray
      })
      Swal.fire(
        'Success',
        'El usuario se ha eliminado del curso',
        'success'
      );
    })
    .catch(function (error) {
      console.log(error.response);
      Swal.fire(
        'Cancelled',
        error.response.data,
        'error'
      )
    })
  }

  // componentWillMount(){}
  componentDidMount(){
    const token = localStorage.getItem('token');
    const config = {
      headers: { token: token }
    };
    const self = this;
    axios.get(
      'http://localhost:8000/user/getusers',
      config
      )
    .then(function (response) {
      let allusers = response.data;
      self.setState({
        users : allusers
      })
    })
    .catch(function (error) {
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
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  componentDidUpdate(prevProps){
    if(prevProps.courseformodal !== this.props.courseformodal) {
      const token = localStorage.getItem('token');
      const self = this;
      const body = {
        id : this.props.courseformodal
      };
      const config = {
        headers: { token: token }
      };
      axios.post(
        'http://localhost:8000/courses/getcoursesusers',
        body,
        config
        )
      .then(function (response) {
        let activeusers = response.data[0].users;

        const results = self.state.users.filter(({ id: id1 }) => !activeusers.some(({ id: id2 }) => id2 === id1));
        self.setState({
          activeusers : activeusers,
          users : results
        })
        
        console.log(results);
      })
      .catch(function (error) {
        console.log(error.response);
        Swal.fire(
          'Cancelled',
          error.response.data,
          'error'
        )
      })
    }
  }

  render() {
    return (
      <div>
        <Modal
        size="lg"
        show={this.props.showmodal}
        onHide={() => {this.props.hideModal()}}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Administrar alumnos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Alumnos">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Eliminar del curso</th>
              </tr>
            </thead>
            <tbody>
              {this.state.activeusers.map((user, index) => 
                {
                  return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.firstname} {user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                    <p class="el-content uk-button uk-button-success uk-circle"  style={{padding: "0 15px", backgroundColor: "red"}} onClick={() => {this.handleDelete(user, index)}}> <i class="fas fa-trash"></i></p>
                    </td>
                  </tr>
                
                  )
                }
              )}
            </tbody>
          </Table>
          </Tab>
          <Tab eventKey="profile" title="Registrar Alumnos">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Añadir al curso</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => 
                {
                  return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.firstname} {user.lastname}</td>
                    <td>{user.email}</td>
                    <td><p class="el-content uk-button uk-button-success uk-circle"  style={{padding: "0 15px"}} onClick={() => {this.handleCreate(user, index)}}> <i class="fas fa-plus"></i></p></td>
                  </tr>
                
                  )
                }
              )}
            </tbody>
          </Table>
          </Tab>
        </Tabs>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
}

export default StudentsModalComponent;