import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
`;
const StyledLink = styled(Link)`
  color: green;
`;
const Navbar = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Login`; 
    navigate(path);
  }
  return (
    <NavbarWrapper data-cy="navbar">
      <StyledLink data-cy="navbar-home-link" to="/">Home</StyledLink>
      <span data-cy="navbar-cart-items-count" >{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={routeChange}>Login</button>
    </NavbarWrapper>
  );
};

export default Navbar;
