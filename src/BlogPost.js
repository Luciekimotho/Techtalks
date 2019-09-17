import React, {Component} from 'react'
import Moment from 'react-moment';
import 'moment-timezone';

import {Button} from "reactstrap";

class BlogPost extends Component{
    constructor(props) {
        super(props);
          
        this.state = {
            title: this.props.blog.title.rendered,
            excerpt: this.props.blog.excerpt.rendered,
            date: this.props.blog.date
        }
     }
    render(){
        const blogDiv = {
            padding: 5,
            paddingBottom: "20px"
    
        }
       
        const blogTitle = {
            fontWeight : 600,
            fontSize: "20px",
            textTransform: "none",
            lineHeight: "25px",
            color: "#000"
                }
    
        const blogContent = {
            color: "#000"
        }
        return(
            <div style={blogDiv}> 
                <h6 style={blogTitle}> { this.state.title } | <Moment format="DD/MM/YYYY">{ this.state.date }</Moment>  </h6> 
                <p style={blogContent}>{ this.state.excerpt } </p>
                <Button color="default" type="button">
                    Read more
                </Button>
            </div>
        )
    }
}


export default BlogPost