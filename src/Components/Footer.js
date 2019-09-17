import React from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";



class Footer extends React.Component{
    // const date = new Date()
    // let year = date.getFullYear()

    render(){
        return (
            
            <footer>
                 <Container>
                    <Row>
                    <Col md="4">
                    <Nav>
                        <NavItem>
                        <NavLink to="/" >
                            Home
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/landing-page" >
                            About
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/register-page">
                            Portfolio
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/profile-page" >
                            Blog
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                    <Col md="4">
                        
                    </Col>
                    <Col md="4">
                        <h6> Made with love by Lucie | 2019</h6>
                    </Col>
                    
                   
                    </Row>
               
                </Container>
            </footer>
        )
    }
}

export default Footer