import React, { Component } from 'react'
import { Table , Button, ButtonToolbar, Card, Form} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';

export default class 
 extends Component {

  constructor(props)
  {
    super(props);
    this.state={cons:[], addModalShow : false, editModalShow: false}
  }

  refreshList()
  {
    fetch(process.env.REACT_APP_API_URL +'Amazon/get-all-amazon-country/')
    .then(response=>response.json())
    .then(data =>
      {
        this.setState({cons:data});
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
    fetch(process.env.REACT_APP_API_URL + 'Amazon/delete-amazon-country?id=' + depid,
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
    const {cons, depid, depname} = this.state;
    let addModalClose = () => this.setState({addModalShow:false});
    let editModalClose = () => this.setState({editModalShow:false});
    return (
      <div>
        <Card>
          
          <Card.Header>
  <Card.Text className="float-start">
Countries
    </Card.Text>
          <ButtonToolbar className="float-end" >
          <Button variant = 'primary' 
          onClick = {()=> this.setState({addModalShow:true})}>
            Add New
          </Button>

          <AddDepModal show = {this.state.addModalShow}
          onHide = {addModalClose}/>
        </ButtonToolbar>
        </Card.Header>
        
        <Table className='mt-4' striped bordered hover size ="sm">
          <thead>
          <th>Country ID</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
          </thead>

          <tbody>
            {cons.map(con=>
              <tr key ={con.id}>
                <td>{con.id}</td>
                <td>{con.name}</td>
                <td>
                  <ButtonToolbar  className='d-flex justify-content-center'>
                    <Button variant="warning" onClick = {() => this.setState({editModalShow:true,depid:con.id,depname:con.name})}>
Edit
                    </Button>
                    <EditDepModal show={this.state.editModalShow}
                    onHide = {editModalClose}
                    depid = {depid}
                    depname = {depname}/>
                  </ButtonToolbar>
                  </td>

<td>
  <ButtonToolbar  className='d-flex justify-content-center'>
                    <Button  variant="danger" onClick = {() => this.deleteDep(con.id)}>
Delete
                    </Button>

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
