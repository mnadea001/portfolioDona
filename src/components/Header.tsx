import { Fragment } from 'react';
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header: React.FC = () => {
  return (
    <Fragment>
      <nav style={navStyles}>
        <NavLink to='/' style={linkStyles}>Home</NavLink>
        <NavLink to='/slider' style={linkStyles}>Compétences</NavLink>
        <NavLink to='/projets' style={linkStyles}>Projets</NavLink>
        <NavLink to='/experiences' style={linkStyles}>Expériences</NavLink>
        {/* <NavLink to='/login' style={linkStyles}>Contact</NavLink> */}
      </nav>
      <Outlet />
    </ Fragment>
  );
};

const navStyles: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
  zIndex: 1000,
  marginTop: '14px'
};

const linkStyles: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px",
};



export default Header;
