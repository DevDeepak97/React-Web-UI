import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg"> 
      <Container fluid>
        <Navbar.Brand href="#">
          <img src='/logo.png' alt='logo of app' className='fluid' id='main--logo'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >   
          </Nav>
          <Nav>
          <Nav.Link href="#action1">My Assignment</Nav.Link>
          <Nav.Link href="#action2">Chat With Mentor</Nav.Link>
          <img src='/profile.png' className='fluid' alt='profile icon' id='profile-icon'/>
          <NavDropdown title="ProfileName" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header