import React, { useState } from "react";


function Todo({ title, completed, removeTodoItemProp, editTodoItemProp }) {
    const [isEditing, setEditing] = useState(false);
    const [value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDoubleClick = () => {
        setEditing(true);
    };
    const handleKeyDown = (event) => {
        const key = event.keyCode;

        if (key === 13) {
            editTodoItemProp({ title: tempValue })
            setValue(tempValue);
            setEditing(false);
        } else if (key === 27) {
            setTempValue(value)
            setEditing(false)
        }
    };

    const handleInputOnChange = (event) => {
        let val = event.target.value
        setTempValue(val);
    }

    const handleCompleted = () => {
        setCompleted((prevVal) => {
            const newState = !prevVal;
            editTodoItemProp({ completed: newState });
            return newState;
        });
    }

    return (
        <div className="row">
            {
                isEditing ?
                    <div className="column seven wide">
                        <div className="ui input fluid" >
                            <input onChange={handleInputOnChange} onKeyDown={handleKeyDown} autoFocus={true} value={tempValue} />
                        </div>
                    </div>

                    :
                    <>
                        <div onDoubleClick={handleDoubleClick} className="column five wide">
                            <h2 className={"ui header" + (completedState && " green")} >{value}</h2>
                        </div>

                        <div className="column one wide">
                            <button onClick={handleCompleted} className={"ui button circular icon " + (completedState ? "blue" : "green")}><i className=" white check icon" /></button>
                        </div>

                        <div className="column one wide">
                            <button onClick={removeTodoItemProp} className="ui button circular icon red"><i className="white remove icon" /></button>
                        </div>
                    </>
            }
        </div >

    );
};

export default Todo;