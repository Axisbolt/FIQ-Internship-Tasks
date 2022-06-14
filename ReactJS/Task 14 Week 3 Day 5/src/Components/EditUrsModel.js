import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form, ModalFooter} from 'react-bootstrap';

export class EditUrsModal extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event)
    {
        event.preventDefault();
        fetch('https://localhost:44393/Order/update-amazon-order',
       
        {
         method: 'PUT',
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
         } ,
         body:JSON.stringify(
             {
                 id : event.target.id.value,
                 userName : event.target.userName.value,
                 cost: event.target.cost.value,
                 itemQty: event.target.itemQty.value,
                 created: event.target.created.value,
                 updated: event.target.updated.value,
                 amazonID: event.target.amazonID.value 
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
                    Update
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
                                <Form.Control type = "text" name ="userName" required defaultValue ={this.props.depname} placeholder='name'/>
                            </Form.Group>
                            <Form.Group controlId = "cost">
                                <Form.Label>Cost</Form.Label>
                                <Form.Control type = "text" name ="cost" required defaultValue ={this.props.depcost} placeholder='cost'/>
                            </Form.Group>
                            <Form.Group controlId = "itemQty">
                                <Form.Label>Item Quantity</Form.Label>
                                <Form.Control type = "text" name ="itemQty" required defaultValue ={this.props.depitemq} placeholder='itemQty'/>
                            </Form.Group>
                            <Form.Group controlId = "created">
                                <Form.Label>Created Date & Time </Form.Label>
                                <Form.Control type = "text" name ="created" required defaultValue ={this.props.depcdate} placeholder='created'/>
                            </Form.Group>
                            <Form.Group controlId = "updated">
                                <Form.Label>Updated Date & Time</Form.Label>
                                <Form.Control type = "text" name ="updated" required defaultValue ={this.props.depudate} placeholder='updated'/>
                            </Form.Group>
                            <Form.Group controlId = "amazonID">
                                <Form.Label>Country ID</Form.Label>
                                <Form.Control type = "text" name ="amazonID" required defaultValue ={this.props.depaid} placeholder='amazonID'/>
                            </Form.Group>
                            <Form.Group>
                                <br></br>
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