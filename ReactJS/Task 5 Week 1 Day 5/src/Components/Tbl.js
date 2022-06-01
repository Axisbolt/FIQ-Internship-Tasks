import React from 'react'
import { Table} from 'reactstrap';


const Tbl = () => {
  return (
     <div> 
         <h5>Apple Stores</h5>
    <Table dark>
    <thead>
      <tr>
        <th>
          Country
        </th>
        <th>
          State
        </th>
        <th>
          City
        </th>
        <th>
          Contact No.
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">
          India
        </th>
        <td>
          Madhya Pradesh
        </td>
        <td>
          Bhopal
        </td>
        <td>
          +91-789-456-1230
        </td>
      </tr>
      <tr>
        <th scope="row">
          USA
        </th>
        <td>
          Florida
        </td>
        <td>
        Miami
        </td>
        <td>
        (305) 421-0400
        </td>
      </tr>
      <tr>
        <th scope="row">
          Canada
        </th>
        <td>
        Ontario
        </td>
        <td>
         Toronto
        </td>
        <td>
        +1905-366-0580
        </td>
      </tr>
    </tbody>
  </Table>
  <br></br>
  </div>
  );
};

export default Tbl