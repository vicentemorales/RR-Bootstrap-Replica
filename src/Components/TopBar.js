import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function TopBar() {
  return (
  
            <Navbar bg="light" expand="lg">
            <Navbar.Brand style={{ marginLeft: "0" }} href="#home">
                <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="Instacart Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
         
            <Navbar.Collapse >
                <Nav >
                {/* Add any additional navigation items here */}
                </Nav>
                <Nav >
                <Nav.Link href="#LogIn">Log In</Nav.Link>
                <Button variant="success" >Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
      
            </Navbar>
        

  );
}

export default TopBar;
