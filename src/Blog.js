import React, {Component} from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import BlogPost from './BlogPost';

class Blog extends Component{
    

    state = {
        data : [],
    }

    componentDidMount(){
        const url = 'http://luciekimotho.com/blog/wp-json/wp/v2/posts'
    
        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })
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

        const { data } = this.state;
        const blogs = data.map(blog => <BlogPost key={blog.id} blog={blog}/>)

        return(
            <div> {blogs} </div>    
        )
    }   
}

export default Blog




