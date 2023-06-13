import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function TopBar() {
  return (
    
    <Navbar bg="light" expand="lg" style={{ width: "100%", display: 'flex', flexDirection:"row", justifyContent:"space-between"}}>


      <div style={{width: "45%"}}>    
      <Navbar.Brand style={{ marginLeft: "0", display:"flex", paddingLeft: "3%", paddingTop: "10px", paddingBottom: "10px"}} href="#home">
          <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="Instacart Logo" />
      </Navbar.Brand>
 
      </div>


      <div style={{ marginLeft: "0", display:"flex", paddingRight: "3%", paddingTop: "10px" }}>
      <Navbar.Collapse >
          <Nav >
          {/* Add any additional navigation items here */}
          </Nav>
          <Nav >
          <Nav.Link href="#LogIn" style={{ color:"black", fontWeight:"bold", textDecoration:"none"}}>Log In</Nav.Link>
          <Button  style={{ color:"white", height:"29px", marginLeft: "13px", border: "none", borderRadius:"13px", backgroundColor:"#0aad0a"}}>Sign Up</Button>{' '}
          </Nav>
      </Navbar.Collapse>
      </div>
      </Navbar>
      

  );
}

export default TopBar;
