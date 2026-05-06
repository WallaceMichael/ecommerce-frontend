import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import logo from "../assets/images/Logo.png";
import cartIcon from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" width={77} />
            </Navbar.Brand>

            <div className="nav-icons-mobile d-flex align-items-center gap-2 d-lg-none ms-auto me-2">
              <a href="" className="icon-link">
                <img src={cartIcon} alt="Cart" />
              </a>
              <a href="" className="icon-link">
                <img src={user} alt="User" />
              </a>
            </div>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse
              id="navbarScroll"
              className="navbar-collapse-custom"
            >
              {/* MENU */}
              <Nav className="ms-lg-3 w-lg-auto">
                <Nav.Link href="#men">Men</Nav.Link>
                <Nav.Link href="#women">Women</Nav.Link>
                <Nav.Link href="#fragrance">Fragrance</Nav.Link>
                <Nav.Link href="#footwear">Footwear</Nav.Link>
                <Nav.Link href="#kids">Kids</Nav.Link>
              </Nav>

              <div className="nav-right d-flex align-items-center gap-2 ms-lg-auto w-lg-auto">
                {/* SEARCH */}
                <Form className="search-box flex-grow-1">
                  <span className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <Form.Control
                    type="search"
                    placeholder="Search entire store here..."
                    className="search-input"
                  />
                </Form>

                {/* Ícones visíveis apenas no desktop */}
                <div className="d-none d-lg-flex align-items-center gap-2">
                  <a href="" className="icon-link">
                    <img src={cartIcon} alt="Cart" />
                  </a>
                  <a href="" className="icon-link">
                    <img src={user} alt="User" />
                  </a>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>

          
        </div>
      </header>
    </>
  );
};

export default Home;
