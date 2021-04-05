import React from "react";
import Todo from "./ToDo"

const List = ({ list, removeTodoListProp, editTodoListProp }) => {

    const renderedList = list.map((item) =>  <Todo title={item.title}
                                                    completed={item.completed} 
                                                    key={item.title} 
                                                    removeTodoItemProp = { (event) => removeTodoListProp(item._id)} 
                                                    editTodoItemProp = {(updatedItem) => editTodoListProp(item._id,updatedItem)}
                                                    />);

    return (
        <div className="ui grid center aligned ">
            {renderedList}
        </div>
    )

}
export default List;