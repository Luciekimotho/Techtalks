import React,  {Component} from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import ToDoItem from './Components/ToDoItem'
import {
     Container,
    Row,
    Col
    } from "reactstrap";


class ToDo extends Component{
    render(){

        const pageTitle = {
            color: "#000",
            textTransform: "uppercase",
            paddingLeft: "50px"
        }
       
        return (
            <div>
                <Header/>
                <Container fluid={true}>
                    <Row>
                    <Col md="1"></Col>
                        <Col md="10">
                            <div className="title">
                                <h3 className="mb-3" style={pageTitle}>To Do </h3>
                            </div>
                           
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>

                <ToDoItem/>
                <Footer/>
            </div>
         
        )
    }
}

export default ToDo