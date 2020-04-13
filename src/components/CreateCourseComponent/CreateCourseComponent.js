import React, { Component } from 'react';
import courseimg from "../../assets/images/courses/course-1.jpg";
import './CreateCourseComponent.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const axios = require('axios');


class CreateCourseComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       courses: []
     };
   }

  // componentWillMount(){}
  componentDidMount(){
    
  }

  componentDidUpdate(prevProps) {
    if(prevProps.courseList !== this.props.courseList) {
      const courses = this.props.courseList;
      this.setState({ 
        courses : courses,
      });
    }
  }
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        {/* sidebar */}         
        <div className="admin-content">         
          <div className="admin-content-inner"> 
            <div className="uk-background-default uk-position-relative uk-box-shadow-medium"> 
              <h5 className="uk-padding-small uk-margin-remove uk-text-bold  uk-text-left"> Your Courses </h5> 
              <p className="el-content uk-button uk-button-success uk-circle uk-position-top-right" onClick={() => this.props.createCourse({})} style={{marginRight: "1%", marginTop: "0.5%"}}> <i className="fas fa-plus" /> New Course </p> 
              <hr className="uk-margin-remove" /> 
              {this.state.courses.map((course, index) => {
                if(course.status) return (<div>
                  <div class="uk-align-right" style={{position: "absolute", right: "0"}}> 
                                <p class="el-content uk-button uk-button-success uk-circle" onClick={() => this.props.createCourse(course)}> <i class="fas fa-pencil-alt"></i></p>
                                <p class="el-content uk-button uk-button-danger uk-circle" onClick={() => this.props.deleteCourse(course, index)}> <i class="fas fa-trash"></i></p> 
                            </div>  
                  <div key={course.id} className="uk-padding-small uk-grid" style={{borderBottom: "black", borderWidth: "10px"}}> 
                
                <div className="uk-width-1-3@m uk-visible@m"> 
                  <div style={{maxWidth: "309px", maxHeight: "160px", overflow: "hidden"}}>
                    <img src={"http://localhost:8000/" + course.img} alt="" className="uk-animation-fade" style={{overflow: "hidden"}} /> 
                  </div>
                  <ul className="uk-list uk-text-small"> 
                    <li> Rating: {course.rating} </li>                                 
                    <li> Veces calificado: {course.timesrated} </li>
                    <li> Número de alumnos: {course.students} </li>                                     
                    <li> Fecha de publicacion: {course.createdAt}</li>   
                    <li> {course.private ? "Curso privado" : "Curso no privado"}</li>                               
                  </ul>                             
                </div>                         
                <div className="uk-width-expand" style={{display: "flex"}}>      
                <div style={{width: "30%"}}>                      
                  <h3 className="uk-margin-top"> {course.name} </h3> 
                  <h5 className="uk-margin-remove"> {course.description} </h5> 
                  <h5 className="uk-margin-small uk-text-muted"> About</h5> 
                  <p> {course.about} </p> 
                </div>
                <div style={{width: "50%"}}>
                <h3 className="uk-margin-top"> Secciones </h3> 
                <Accordion allowZeroExpanded={true}>
                  {course.sections ? course.sections.map((section, index2) => {
                    if (section.status) return <AccordionItem> <div key={section.id} style={{display: "flex", cursor: "pointer", width: "100%"}} >
                      <AccordionItemButton style={{padding: "5px", marginBottom:"5px"}}><p className="uk-margin-remove" style={{display: "inline", overflow: "hidden", whiteSpace: "nowrap"}}> {section.name} </p> </AccordionItemButton>
                      <div class="" style={{display: "flex", marginLeft: "5px"}}> 
                                <p class="uk-button uk-button-success uk-circle" style={{padding: "0 15px"}} onClick={() => this.props.createSection(course.id, index, section)}> <i class="fas fa-pencil-alt"></i></p>
                                <p class="el-content uk-button uk-button-danger uk-circle" style={{padding: "0 15px"}} onClick={() => this.props.deleteSection(section, index, index2)} > <i class="fas fa-trash"></i></p> 
                            </div>  
                      </div>
                      
                      <AccordionItemPanel style={{padding: "0px"}}>
                        {section.lessons ? section.lessons.map((lesson, index3) => {
                          if (lesson.status) return <div style={{borderStyle: "solid", display: "flex"}}>
                            <p className="uk-margin-remove" style={{display: "inline", overflow: "hidden", whiteSpace: "nowrap"}}> {lesson.name} <br/></p>
                            <div style={{display: "flex", marginLeft: "5px", alignContent: "right"}}> 
                                <p class="uk-button uk-button-success uk-circle" style={{padding: "0 15px"}} onClick={() => this.props.createLesson(section.id, index2, index, lesson)}> <i class="fas fa-pencil-alt"></i></p>
                                <p class="el-content uk-button uk-button-danger uk-circle" style={{padding: "0 15px"}} onClick={() => this.props.deleteLesson(lesson, index, index2, index3)} > <i class="fas fa-trash"></i></p> 
                            </div>  
                            </div>
                        }) : ""}
                      <p className="el-content uk-button uk-button-success uk-circle" onClick={() => this.props.createLesson(section.id, index2, index, {})}> <i className="fas fa-plus" /> New Lesson </p> 
                      </AccordionItemPanel>
                      </AccordionItem>
                  }) : ""}
                  </Accordion>
                <p className="el-content uk-button uk-button-success uk-circle" onClick={() => this.props.createSection(course.id, index, {})}> <i className="fas fa-plus" /> New Section </p> 
                <div class="uk-align-right uk-align-bottom" style={{position: "absolute", right: "0"}}> 
                                <p class="el-content uk-button uk-button-success uk-circle" onClick={() => this.props.modalDisplay(course.id)}> <i class="fas fa-plus"></i>Añadir alumnos</p>
                </div>  
                </div>
                </div>                         
              </div>
              </div>
              )  
              }
              )}                                  
            </div>                             
          </div>             
        </div>         
      </div>
    );
  }
}

export default CreateCourseComponent;