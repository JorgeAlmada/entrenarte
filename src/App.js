import React from 'react';
import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import LoginComponent from './components/loginComponent/loginComponent';
import AdminDashboardComponent from './components/AdminDashboardComponent/AdminDashboardComponent';
import AdminDashboardEditoComponent from './components/AdminDashboardEditoComponent/AdminDashboardEditoComponent';
import CourseDashboardComponent from './components/CourseDashboardComponent/index';
import CourseSectionLessonComponent from './components/CourseSectionLessonComponent/index';
import CourseCatalogComponent from './components/CourseCatalogComponent';
import CoursesContainerComponent from './components/CoursesContainerComponent/CoursesContainerComponent';
import CreateCourseComponent from './components/CreateCourseComponent/CreateCourseComponent';
import AdminCourseContainerComponent from './components/AdminCourseContainerComponent/AdminCourseContainerComponent';
import AdminDashboardContainerComponent from './components/AdminDashboardContainerComponent/AdminDashboardContainerComponent';
import AllCoursesContainerComponent from './components/AllCoursesContainerComponent/AllCoursesContainerComponent';

const history = createBrowserHistory();


function App() {
  
  return (

    
    <div className="App">
      <Router history={history}> 
        <Switch>
          <Route exact path='/login'>
            <LoginComponent></LoginComponent>
          </Route>
          <Route exact path='/'>
            <LoginComponent></LoginComponent>
          </Route>
          <Route exact path ='/coursepage'>
            <CoursesContainerComponent></CoursesContainerComponent>
          </Route>
          <Route exact path ='/admindashboard'>
            <AdminDashboardContainerComponent></AdminDashboardContainerComponent>
          </Route>
          <Route exact path ='/allcourses'>
            <AllCoursesContainerComponent></AllCoursesContainerComponent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
