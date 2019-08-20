import React,  {Component} from 'react';

class ToDoItem extends Component{
    render(){
       
        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox" /> Checkbox 1
                    
                </label>
                
               
            </div>
        )
    }
}

export default ToDoItem