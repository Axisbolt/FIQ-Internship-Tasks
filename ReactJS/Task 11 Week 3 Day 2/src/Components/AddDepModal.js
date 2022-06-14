import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form, ModalFooter} from 'react-bootstrap';

export class AddDepModal extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event)
    {
        event.preventDefault();
        fetch('https://localhost:44393/Amazon/insert-amazon-country',
       
        {
         method: 'POST',
         headers:{
             'Accept':'*/*',
             'Content-Type':'application/json'
         } ,
         body:JSON.stringify(
             {
                 id : 0,
                 name : event.target.name.value 
             }
         )  
        })

        .then(res=> {
            
            debugger;
            res.json();
        })
        .then((result) => {
            alert('Success');
        },
        (error) =>
        {
            alert('Failed');
        })
    }
    render()
  
    {  return(
        <div className="container">
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centred>
            <Modal.Header closseButton>
                <Modal.Title id = "contained-modal-title-vcenter">
                    Add New
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId = "name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type = "text" name ="name" required placeholder='name'/>
                            </Form.Group>
                            <Form.Group>
                                <br></br>
                                <Button variant="primary" type = "submit">
                                    Add Country
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <ModalFooter>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </ModalFooter>
            </Modal>
        </div>
        )
    }
}