import React from "react";
import TodosList from "./TodosList";
import ChildComponent from "./ChildComponent";

const RenderComponent = () => {
    const toDos = [
        {id: 1, name: 'firstTodo'},
        {id: 2, name: 'secondtTodo'},
        {id: 3, name: 'thirdTodo'},
        {id: 4, name: 'fourthTodo'},
    ];
    

    

    return (
    <div>
   {toDos.map((name, index)=> {
    return <TodosList key={index} name={name.name} id={name.id}/>
   })}

<ChildComponent />
    </div>
    )
};

export default RenderComponent;