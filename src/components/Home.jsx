import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import logo from "../assets/images/Logo.png";
import cartIcon from "../assets/icons/cart.svg";
import user from "../assets/icons/user.svg";

const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#">
              <img src={logo} alt="" width={77} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse
              id="navbarScroll"
              className="d-flex align-items-center gap-4 w-100"
            >
              {/* MENU */}
              <Nav className="ms-3">
                <Nav.Link>Men</Nav.Link>
                <Nav.Link>Women</Nav.Link>
                <Nav.Link>Fragrance</Nav.Link>
                <Nav.Link>Footwear</Nav.Link>
                <Nav.Link>Kids</Nav.Link>
              </Nav>

              <div className="nav-right d-flex align-items-center gap-2 ms-auto ">

                {/* SEARCH */}
                <Form className="search-box">
                  <span className="search-icon">
                    <svg
                      width="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>

                  <Form.Control
                    type="search"
                    placeholder="Search entire store here..."
                    className="search-input"
                  />
                </Form>

                {/* ICONES */}
                <a href="" className="icon-link">
                  <img src={cartIcon} alt="Cart" />
                </a>

                <a href="" className="icon-link">
                  <img src={user} alt="User" />
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
