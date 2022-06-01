import PropTypes from 'prop-types'
import Btn from './Btn'
import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, NavbarText } from 'reactstrap'

export class Navb extends Component {
  static propTypes = {}

  render() {
    return (
        <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            Steve Jobs
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="https://www.apple.com/">
                  Apple
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://allaboutstevejobs.com/bio/short_bio">
                  Bio
                </NavLink>
              </NavItem>
              <UncontrolledDropdown
                inNavbar
                nav
              >
                <DropdownToggle
                  caret
                  nav
                >
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>
              By Kapil Chouhan
            </NavbarText>
          </Collapse>
        </Navbar>
    
      </div>
    )
  }
}

export default Navb