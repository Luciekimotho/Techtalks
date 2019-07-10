import React, {Component} from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'

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
        const { data } = this.state;
        const result = data.map((entry, index) => {
            return <li key="index"> 
                         {entry.title.rendered} | {entry.date}
             </li>
        })

        return(
            <ul> {result} </ul>    
        )
    }   
}

export default Blog




