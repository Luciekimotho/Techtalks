import React, {Component} from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import BlogPost from './BlogPost';
import { Container,
        Row,
        Col
        } from "reactstrap";

class Blog extends Component{
    

    state = {
        data : [],
    }

    componentDidMount(){
        const url = 'https://blog-api-django.herokuapp.com/api/'
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    
        fetch(proxyUrl + url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
    }
    render(){

        const container = {
            padding: "20px",
            backgroundColor: "#fff",
        }

        const blog = {

        }

        const blogDiv = {
            padding: 5,

        }
        const pageTitle = {
            color: "#000",
            textTransform: "uppercase",
            paddingLeft: "50px"
        }
        const blogTitle = {
            fontWeight : 700,
        }

        const blogContent = {

        }
        const { data } = this.state;
        const blogs = data.map(blog => <BlogPost key={blog.id} blog={blog}/>)

        return(
            <div>
                <Header/>
                <Container style = {container} fluid={true}>
                    <Row>
                    <Col md="1"></Col>
                        <Col md="10">
                            <div className="title">
                                <h3 className="mb-3" style={pageTitle}>Blogs</h3>
                            </div>
                            <div style = {blog}> {blogs} </div> 
                        </Col>
                        <Col md="1"></Col>
                    </Row>
                </Container>

                <Footer/>
            </div>

        )
    }   
}

export default Blog




