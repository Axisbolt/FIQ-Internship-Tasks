import React, { Component } from 'react'
import { Table , Button, ButtonToolbar, Card} from 'react-bootstrap';

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
          <th>Options</th>
        

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
                  <ButtonToolbar>
                    
                    <Button className="me-2" variant="warning" onClick = {() => this.setState()}>
Edit
                    </Button>
          
                    <Button className="me-2" variant="danger" onClick = {() => this.deleteDep()}>
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
