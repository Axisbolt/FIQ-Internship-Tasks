import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form, ModalFooter} from 'react-bootstrap';

export class EditDepModal extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleSubmit(event)
    {
        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL +'Amazon/update-amazon-country',
        {
         method: 'PUT',
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
         } ,
         body:JSON.stringify(
             {
                 id : event.target.id.value,
                 name : event.target.name.value 
             }
         )  
        })


        .then(res=> {
            
            debugger;
            res.json();
        })
        .then((result) => {
            alert(result);
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
                    Edit Countries
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit = {this.handleSubmit}>
                        <Form.Group controlId = "id">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type = "text" name ="id" required disabled defaultValue = {this.props.depid} placeholder='id'/>
                            </Form.Group>

                            <Form.Group controlId = "userName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type = "text" name ="name" required defaultValue ={this.props.depname} placeholder='name'/>
                            </Form.Group>
<br></br>
                            <Form.Group>
                                <Button variant="primary" type = "submit">
                                    Update
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