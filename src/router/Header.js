import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";

const Header = (props) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const toggleNav = () => {
    setisNavOpen(isNavOpen === false ? true : false);
  };

  return (
    <header className="header">
      <div className="container">
        <Navbar light className="navbar-expand-md  ">
          <NavbarBrand className="navbarbrand " href="/">
            <h3 className="text-danger">FSD CODE - Syed Samsdueen</h3>
          </NavbarBrand>
          <NavbarToggler className="navbar-nav " onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar className="ms-auto">
              <NavLink to={`/`} className="nav-link ">
                <h5>Home</h5>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
