import React, {Component} from 'react'

// function BlogPost(props){
//     const blogDiv = {
//         padding: 5,

//     }
//     const blogTitle = {
//         fontWeight : 700,
//     }

//     const blogContent = {

//     }
//     console.log(props)
//     return(
        
//         <div style={blogDiv}> 
//             <h6 style={blogTitle}> {props.blog.title.rendered} |  </h6> 
//             <p style={blogContent}>{props.blog.excerpt.rendered } </p>
//         </div>
//     )
// }

class BlogPost extends Component{
    constructor(props) {
        super(props);
          
        this.state = {
            title: this.props.blog.title.rendered,
            excerpt: this.props.blog.excerpt.rendered
        }
     }
    render(){
        const blogDiv = {
            padding: 5,
    
        }
        const blogTitle = {
            fontWeight : 700,
        }
    
        const blogContent = {
    
        }
        return(
        
            <div style={blogDiv}> 
                <h6 style={blogTitle}> { this.state.title} |  </h6> 
                <p style={blogContent}>{ this.state.excerpt } </p>
            </div>
        )
    }
}


export default BlogPost