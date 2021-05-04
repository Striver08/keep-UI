import React, { useState } from "react";
//It is  used for taking input for ToDo
const Form = ({ addTodo }) => {

    const [inputVal, setValue] = useState("");

    function handleChange(event) {
        let val = event.target.value;
        setValue(val)
        console.log(val)

    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if (inputVal.trim() === "") return;
        addTodo({ title: inputVal, completed: false })
        setValue("")
    };

    return (
        <form className="ui form" onSubmit={handleFormSubmit} >
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputVal} />
                <button>
                    <span>Add</span>
                </button>
            </div>
        </form>
    )
}

export default Form;