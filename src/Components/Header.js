import React from 'react'
import { Link } from "react-router-dom";
import {
    Collapse,
    UncontrolledCollapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    FormGroup,
    Form,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";

class Header extends React.Component{
    render(){
        return (
            <>
            <Navbar
                className="bg-dark" expand="lg">
                <Container>
                        <NavbarBrand href="#" onClick={e => e.preventDefault()}
                            title="Designed by Luciekim">
                            <span>LK • </span> Tech Talks
                        </NavbarBrand>
                        <button className="navbar-toggler" id="navbarNav" type="button">
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                            <span className="navbar-toggler-bar navbar-kebab"></span>
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbarNav">
                            <Nav navbar>
                                <NavItem className="active">
                                    <NavLink href="#" onClick={e => e.preventDefault()}>
                                        Home <span className="sr-only">(current)</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="">
                                    <NavLink href="#" onClick={e => e.preventDefault()}>
                                        About 
                                    </NavLink>
                                </NavItem>
                                <NavItem className="">
                                    <NavLink href="#" onClick={e => e.preventDefault()}>
                                        Blog 
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                </Container>
            </Navbar>
        </>
        );
    
    }
}

export default Header