import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const UserHeader = () => {
  const movie = useSelector(state => state.movies.limit)
  console.log(movie);
  
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">movies({movie})</Link>
            <Link to="/login">login</Link>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default UserHeader