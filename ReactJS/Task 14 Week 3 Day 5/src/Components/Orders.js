import React, { Component } from 'react'
import { Table , Button, ButtonToolbar, Card} from 'react-bootstrap';
import { AddUsrModal } from './AddUsrModal';
import { EditUrsModal } from './EditUrsModel';
export default class 
 extends Component {

  constructor(props)
  {
    super(props);
    this.state={deps:[],}
  }

  refreshList()
  {
    fetch(process.env.REACT_APP_API_URL +'order/get-all-amazon-order')
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

deleteDep(usrid)
{
  if(window.confirm('Are you sure'))
  {
    fetch(process.env.REACT_APP_API_URL + 'Order/delete-amazon-order?id=' + usrid,
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
    const {deps, depid, depname, depitemq, depcost, depcdate, depudate, depaid} = this.state;
    let addModalClose = () => this.setState({addModalShow:false});
    let editModalClose = () => this.setState({editModalShow:false});
    return (
      <div>
        <Card>
          <Card.Header>
          <Card.Text className="float-start">
Orders
    </Card.Text>
          <ButtonToolbar className="float-end" >
          <Button variant = 'primary' 
          onClick = {()=> this.setState({addModalShow:true})}>
            Add New
          </Button>

          <AddUsrModal show = {this.state.addModalShow}
          onHide = {addModalClose}/>
        </ButtonToolbar>
        </Card.Header>
        
        <Table className='mt-4' striped bordered hover size ="sm">
          <thead>
          <th>Order ID</th>
          <th>UserName</th>
          <th>Cost</th>
          <th>Item Oty</th>
          <th>Created Date</th>
          <th>Updated Date</th>
          <th>Amazon ID</th>
          <th>Edit</th>
          <th>Delete</th>
        

          </thead>

          <tbody>
            {deps.map(dep=>
              <tr key ={dep.id}>
                <td>{dep.id}</td>
                <td>{dep.userName}</td>
                <td>{dep.cost}</td>
                <td>{dep.itemQty}</td>
                <td>{dep.created}</td>
                <td>{dep.updated}</td>
                <td>{dep.amazonID}</td>
              
                <td>
                  <ButtonToolbar className='d-flex justify-content-center'>
                    
                  <Button variant="warning" onClick = {() => this.setState({editModalShow:true,depid:dep.id,depname:dep.userName,depcost:dep.cost,depitemq:dep.itemQty,depcdate:dep.created,depudate:dep.updated,depaid:dep.amazonID})}>
Edit
                    </Button>
                    <EditUrsModal show={this.state.editModalShow}
                    onHide = {editModalClose}
                    depid = {depid}
                    depname = {depname}
                    depcost = {depcost}
                    depitemq = {depitemq}
                    depcdate = {depcdate}
                    depudate = {depudate}
                    depaid = {depaid}/>
                    </ButtonToolbar>
                    </td>
                    <td>
           <ButtonToolbar className='d-flex justify-content-center'>
                    <Button className="me-2" variant="danger" onClick = {() => this.deleteDep(dep.id)}>
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
