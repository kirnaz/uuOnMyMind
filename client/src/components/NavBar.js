import React, { useContext } from "react";
import { Context } from "../index";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NOTES_ROUTE } from "../utils/consts";
import NavLink from "react-bootstrap/esm/NavLink";
import { Container } from "react-bootstrap";

const NavBar = () => {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <NavLink style={{ color: "white" }} to={NOTES_ROUTE}>
          Notes
        </NavLink>
        </Container>
      </Navbar>
    
  );
};

export default NavBar;
