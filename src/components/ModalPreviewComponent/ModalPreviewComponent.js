import React, { Component } from 'react';
import './ModalPreviewComponent.css';
import { Modal} from 'react-bootstrap';

class ModalPreviewComponent extends Component {
   constructor(props){
     super(props);
     this.state = {
       course : {}
     };
   }

   componentDidUpdate(prevProps) {
    if(prevProps.selectedCourse !== this.props.selectedCourse) {
      const course = this.props.selectedCourse;
      this.setState({ 
        course : course
      });
    }
  }

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
        <Modal
        size="lg"
        show={this.props.showmodal}
        onHide={() => {this.props.hideModal()}}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="topic4">
          <Modal.Title id="example-modal-sizes-title-lg" style={{color: "white"}}>
            Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div class=""> 
                <div class="video-responsive">
                    <iframe src={this.state.course.video} class="uk-padding-remove" uk-video="automute: false" frameborder="0" allowfullscreen uk-responsive></iframe>
                </div>
                <div class="uk-modal-body"> 
                    <h3>{this.state.course.name} </h3>
                    <p>{this.state.course.description}</p>
                </div>                         
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <div> 
              <button class="uk-button uk-button-default uk-modal-close" onClick={() => this.props.hideModal()} type="button">Cancel</button>                             
                  <button class="uk-button uk-button-grey" onClick={() => this.props.handleCreateUserCourse()} type="button">Start now </button>                      
          </div>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default ModalPreviewComponent;