import React,{Component} from 'react';
import {Modal,Button,Row,Col,Form, ModalFooter} from 'react-bootstrap';

export class AddUsrModal extends Component{
    constructor(props)
    {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event)
    {
        event.preventDefault();
        fetch(process.env.REACT_APP_API_URL + 'Order/insert-amazon-order',
       
        {
         method: 'POST',
         headers:{
             'Accept':'*/*',
             'Content-Type':'application/json'
         } ,
         body:JSON.stringify(
             {
                 id : 0,
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
                    Add New
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId = "userName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type = "text" name ="userName" required placeholder='UserName'/>
                            </Form.Group>
                            <Form.Group controlId = "cost">
                                <Form.Label>Cost</Form.Label>
                                <Form.Control type = "text" name ="cost" required placeholder='cost'/>
                            </Form.Group>
                            <Form.Group controlId = "itemQty">
                                <Form.Label>Item Quantity</Form.Label>
                                <Form.Control type = "text" name ="itemQty" required placeholder='itemQty'/>
                            </Form.Group>
                            <Form.Group controlId = "created">
                                <Form.Label>Created</Form.Label>
                                <Form.Control type = "text" name ="created" required placeholder='created'/>
                            </Form.Group>
                            <Form.Group controlId = "updated">
                                <Form.Label>Updated</Form.Label>
                                <Form.Control type = "text" name ="updated" required placeholder='updated'/>
                            </Form.Group>
                            <Form.Group controlId = "amazonID">
                                <Form.Label>Amazon ID</Form.Label>
                                <Form.Control type = "text" name ="amazonID" required placeholder='amazonID'/>
                            </Form.Group>
                            <Form.Group>
                                <br></br>
                                <Button variant="primary" type = "submit">
                                    Add New
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