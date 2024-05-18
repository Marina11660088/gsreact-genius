import React from "react";

const ChildComponent = (props) => {
    console.log(props);
    return (
       
        <div>{props.todoList}</div>
    )
}

export default ChildComponent;