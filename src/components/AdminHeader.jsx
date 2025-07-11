import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const AdminHeader = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">add product</Nav.Link>
            <Nav.Link href="#features">user</Nav.Link>
            <Nav.Link href="#pricing">order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default AdminHeader