import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img1 from '../Images/news_logo.png';
import { NavLink } from 'react-router-dom';
import {Container} from 'react-bootstrap';



function Header() {

  

  const linkStyle = {
    textDecoration: 'none', // Remove underlines from links
    color: 'blue', // Change the text color
    fontWeight: 'bold', // Apply bold font-weight
    margin: "10px",
  };
  return (
    <div>

     <Navbar className="bg-body-tertiary" sticky="top" bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={img1}
              width="40"
              height="40"
              borderRadius="15"
             
              className="d-inline-block align-top"
            />{' '}

            Real Time News

           
          </Navbar.Brand>
          <Container>

          <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
           <NavLink to='/' style={linkStyle}>Top</NavLink>
            <NavLink to='/Trending' style={linkStyle}>Trending</NavLink>
            <NavLink to='/Science'style={linkStyle}>Science</NavLink>
            <NavLink to='/Entertainment' style={linkStyle}>Entertainment</NavLink>
            <NavLink to='/Sport' style={linkStyle}>Sports</NavLink>
            </Nav>
          </Navbar.Collapse>

          </Container>

         
         
        </Container>
      </Navbar>

     
      
    </div>
  )
}

export default Header
