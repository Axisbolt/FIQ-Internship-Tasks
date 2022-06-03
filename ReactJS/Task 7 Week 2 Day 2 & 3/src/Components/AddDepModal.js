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
        fetch(process.env.REACT_APP_API_URL +'order/get-all-amazon-order',
        {
         method: 'POST',
         headers:{
             'Accept':'application/json',
             'Content-Type':'application/json'
         } ,
         body:JSON.stringify(
             {
                 id : null,
                 userName : event.target.userName.value 
             }
         )  
        })

        .then(res=>res.json())
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
                    Add Orders
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit = {this.handleSubmit}>
                            <Form.Group controlId = "DepartmentName">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type = "text" name ="UserName" required placeholder='UserName'/>
                            </Form.Group>

                            <Form.Group>
                                <Button variant="primary" type = "submit">
                                    Add Orders
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