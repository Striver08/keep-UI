import React, { useState } from "react";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    mar: {
        margin: '2px'
    }
});

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
        <div>
            <li display="inline" className="mar" >
                {
                    isEditing ?
                        <input display="inline" onChange={handleInputOnChange} onKeyDown={handleKeyDown} autoFocus={true} value={tempValue} />
                        :
                        <>
                            <h2 display="inline" onDoubleClick={handleDoubleClick} className={completedState && "line-through"} >{value}</h2>

                            <CheckCircleOutlineTwoToneIcon onClick={handleCompleted} />
                            <DeleteForeverRoundedIcon onClick={removeTodoItemProp} />
                        </>

                }
            </li>
        </div>

    );
};

export default Todo;