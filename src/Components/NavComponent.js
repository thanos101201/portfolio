import React, { useState } from 'react'
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button, 
} from 'reactstrap';
import { IoMenuOutline } from "react-icons/io5";

function NavComponent(args) {

  const [open, setOpen] = useState(false);

  return (
    <div>
    <Navbar {...args}>
      <NavbarBrand href="/" style={{color:'white'}}>
        <h1>
          Pratik
        </h1>
      </NavbarBrand>
      <Button style={{backgroundColor:'black'}} onClick={() => setOpen(!open)}>
        <h4>
          <IoMenuOutline color='white' />
        </h4>
      </Button>
      
      <Collapse style={{color:'white'}} isOpen={open} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink style={{color:'white'}} href="/about">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white'}} href='/contact'>
              Contact Me
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default NavComponent