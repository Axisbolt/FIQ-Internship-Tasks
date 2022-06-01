import React from 'react'
import {UncontrolledAlert,Alert} from "reactstrap"
import { Form, FormGroup, Label, Input, FormText, Button, Col } from 'reactstrap';
import Accord from './Accord';
import ModalLink from './ModalLink';

const Alrt = () => {
  return (
    <div>


<UncontrolledAlert color="info">
  This page is all about Steve Jobs Informations
</UncontrolledAlert>
<img 
      src="https://storage0.dms.mpinteractiv.ro/media/401/341/5846/5449547/1/steve-jobs.jpg?width=620"
      alt="new" class = "center"  height={600}
      width={350}
      />
      <br></br>
<ModalLink/>
<Accord/>

<Alert color="primary">
    To Know More about Steve Jobs please read this {' '}
    <a
      className="alert-link"
      href="https://en.wikipedia.org/wiki/Steve_Jobs_(book)#:~:text=Steve%20Jobs%20is%20the%20authorized,Benjamin%20Franklin%20and%20Albert%20Einstein."
    >
      Book 
    </a>
    . Give it a click if you like.
  </Alert>
  <br></br>
</div>
    
  );
};

export default Alrt