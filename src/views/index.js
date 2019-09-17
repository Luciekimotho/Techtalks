
import React,  {Component} from 'react';
import Blog from './Blog';
import Footer from './Components/Footer'
import Header from './Components/Header'



class App extends Component{
    render(){
       
        return (
            <div>
                <Header/>
                <Blog/>
                <Footer/>
            </div>
         
        )
    }
}

export default App