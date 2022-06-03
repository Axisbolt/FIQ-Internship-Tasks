import React, { Component } from 'react'
import { Table , Button, ButtonToolbar, Card} from 'react-bootstrap';

import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';


export default class 
 extends Component {

  constructor(props)
  {
    super(props);
    this.state={deps:[], addModalShow : false, editModalShow: false}
  }

  refreshList()
  {
    fetch(process.env.REACT_APP_API_URL +'Amazon/get-all-amazon-country')
    .then(response=>response.json())
    .then(data =>
      {
        this.setState({deps:data});
      })
  }

componentDidMount()
{
  this.refreshList();
}

componentDidUpdate()
{
  this.refreshList();
}


deleteDep(depid)
{
  if(window.confirm('Are you sure'))
  {
    fetch(process.env.REACT_APP_API_URL + 'order/get-all-amazon-order' + depid,
    {
      method:'DELETE',
      header:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
  }
}

  render() {
    const {deps, depid, depusername} = this.state;
    let addModalClose = () => this.setState({addModalShow:false});
    let editModalClose = () => this.setState({editModalShow:false});
    return (
      <div>
        <Card>
          <Card.Header>
          <ButtonToolbar className="float-end" >
          <Button variant = 'primary' 
          onClick = {()=> this.setState({addModalShow:true})}>
            Add Orders
          </Button>

          <AddDepModal show = {this.state.addModalShow}
          onHide = {addModalClose}/>
        </ButtonToolbar>
        </Card.Header>
        
        <Table className='mt-4' striped bordered hover size ="sm">
          <thead>
          <th>Order ID</th>
          <th>UserName</th>
          <th>Edit</th>
          <th>Delete</th>
         
        

          </thead>

          <tbody>
            {deps.map(dep=>
              <tr key ={dep.id}>
                <td>{dep.id}</td>
                <td>{dep.name}</td>
            
              
                <td>
                  <ButtonToolbar >
                    <Button className="me-2" variant="warning" onClick = {() => this.setState({editModalShow:true,depid:dep.id,depusername:dep.userName})}>
Edit
                    </Button>

                    <Button className="me-2" variant="danger" onClick = {() => this.deleteDep(dep.id)}>
Delete
                    </Button>


                    <EditDepModal show={this.state.editModalShow}
                    onHide = {editModalClose}
                    depid = {depid}
                    depusername = {depusername}/>
                  </ButtonToolbar>
                </td>



              </tr>
              
              
              )}
          </tbody>
        </Table>
        </Card>
      </div>
    )
  }
}
