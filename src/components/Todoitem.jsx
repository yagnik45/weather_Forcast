import React from "react";

const TodoItem=(item)=>{
    return(
        <div className="todo-item">
            
            <input type="checkbox"/>
            <span>{item.text}</span>
            <p>...</p>
            
        </div>
    );
};

export default TodoItem;