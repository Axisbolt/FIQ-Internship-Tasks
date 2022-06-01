import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, ButtonGroup, UncontrolledButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap'

export class Btn extends Component {
  static propTypes = {}

  render() {
    return (
       <div>
       <div>
           <h4>Button</h4>
        <Button
          color="primary"
        >
          Click Me
        </Button>
      </div>
      <br></br>
<br></br>
      <div>
      <h4>Outline Button</h4>
  <Button
    color="primary"
    outline
  >
    primary
  </Button>
  {' '}
  <Button outline>
    secondary
  </Button>
  {' '}
  <Button
    color="success"
    outline
  >
    success
  </Button>
  {' '}
  <Button
    color="info"
    outline
  >
    info
  </Button>
  {' '}
  <Button
    color="warning"
    outline
  >
    warning
  </Button>
  {' '}
  <Button
    color="danger"
    outline
  >
    danger
  </Button>
</div>
<br></br>
<br></br>
<div>
  <h4>
    Radio Buttons
  </h4>
  <ButtonGroup>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      One
    </Button>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      Two
    </Button>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      Three
    </Button>
  </ButtonGroup>
  <p>
    Selected:{' '}
  </p>
  <h4>
    Checkbox Buttons
  </h4>
  <ButtonGroup>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      One
    </Button>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      Two
    </Button>
    <Button
      color="primary"
      onClick={function noRefCheck(){}}
    >
      Three
    </Button>
  </ButtonGroup>
  <p>
    Selected: []
  </p>
</div>
<br></br>
<br></br>
<div>
    <h4>Close</h4>
  <Button close />
</div>
<br></br>
<div>
    <h4>Button Group</h4>
    <ButtonGroup>
  <Button>
    Left
  </Button>
  <Button>
    Middle
  </Button>
  <Button>
    Right
  </Button>
</ButtonGroup>
</div>


<UncontrolledButtonDropdown>
  <DropdownToggle caret>
    Dropdown
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem disabled>
      Action
    </DropdownItem>
    <DropdownItem>
      Another Action
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Another Action
    </DropdownItem>
  </DropdownMenu>
</UncontrolledButtonDropdown>
      </div>
    )
  }
}

export default Btn