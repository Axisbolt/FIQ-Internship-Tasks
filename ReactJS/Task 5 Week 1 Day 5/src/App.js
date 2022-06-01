import './App.css';
import React, {Component} from 'react';
import { Button } from 'reactstrap';
import ModalLink from './Components/ModalLink';
import Accord from './Components/Accord';
import Alrt from './Components/Alrt';
import Tbl from './Components/Tbl';
import Btn from './Components/Btn';
import Navb from './Components/Navb';
import Frm from './Components/Frm.js';

function App() {
  return (
    <div>
              <head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
</head>

<Navb/>

<Alrt/>

<Tbl/>

<Frm/>


    </div>
  );
}

export default App;
