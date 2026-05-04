import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="bg-dark text-center py-3">
          <span className="text-white">Your fashion store</span>
            </div>
            
        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary">
              <Navbar.Brand href="#"><img src={logo} alt="" width={170} /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Mens</Nav.Link>
                  <Nav.Link href="#action2">Womens</Nav.Link>
                  <Nav.Link href="#action3">Kids</Nav.Link>
                </Nav>
                <div className="nav-right d-flex">
                  <a href="">
                    <FontAwesomeIcon icon={faUser} />
                  </a>

                  <a href="" className="ms-3">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </a>
                </div>
              </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  );
};

export default Home;
