import React, {useState} from "react";
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
 
const ModalLink = () =>
{ 
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    return (
      <div style={{ textAlign: "center" }}>
        <Button color="secondary" onClick={toggle}>Click Here </Button>
        <Modal size="xl" isOpen={modal} toggle={toggle}>
          <ModalHeader>Steve Jobs</ModalHeader>
          <ModalBody style={{ height: "75vh" }}>
            <iframe
              style={{
                height: "100%",
                width: "100%",
                borderStyle: "none",
                borderRadius: "10px",
              }}
              src="https://en.wikipedia.org/wiki/Steve_Jobs"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              OK{" "}
            </Button>
          </ModalFooter>
        </Modal>
        <br></br>
        <br></br>
        <br></br>
      </div>
      
    );
  };
   
  export default ModalLink;
