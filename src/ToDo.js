import React,  {Component} from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import ToDoItem from './Components/ToDoItem'



class ToDo extends Component{
    render(){
       
        return (
            <div>
                <Header/>
                <ToDoItem/>
                <Footer/>
            </div>
         
        )
    }
}

export default ToDo