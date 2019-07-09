import React, {Component} from 'react'

class App extends Component{
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

export default App




