import React from "react";
import ChildComponent from "./ChildComponent";


const TodosList = (props) => {
    console.log(props)
    return (
       <>
       <div>{props.name}</div>
       <ChildComponent newPropTodo={props.name}/>
       </>
      
    )
}

export default TodosList;