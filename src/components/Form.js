import React, { useState } from "react";

const Form = ({addTodo}) => {

    const [inputVal,setValue] =  useState("");

    function handleChange(event){
        let val = event.target.value;
        setValue(val)
        console.log(val)

    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        if(inputVal.trim()=== "") return;
        addTodo({title: inputVal, completed:false})
        setValue("")
    };

    return (
        <form className="ui form" onSubmit={handleFormSubmit} >
            <div className="ui grid center aligned ">
                <div className="row" >
                <div className="column five wide" >
                    <input  value= {inputVal} onChange={handleChange} type="text" placeholder="Enter your Work to be done..." />
                    </div>
                <div className= "column one wide" >   
                    <button type="submit" className= "ui button circular icon green" > <i className= " white plus icon" ></i> </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;