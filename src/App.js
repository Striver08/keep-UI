import React, { useState, useEffect } from 'react';
import axios from "axios";

import Form from "./components/Form"  // Form is imported
import List from "./components/List"


function App() {

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    async function fetchData(){
      const {data} = await axios.get("https://keep-server.herokuapp.com/todos");
      setTodoList(data);
     }
    fetchData();
  }, [])
 
  async function addTodo(item) {
    const {data} = await axios.post("https://keep-server.herokuapp.com/todos", item)
    setTodoList((prevValue)=> [...prevValue, data]  );
  }
  async function removeTodo(id) {
    await axios.delete(`https://keep-server.herokuapp.com/todos/${id}`)
    setTodoList((prevValue) => prevValue.filter((item)=> item._id !== id));
    console.log(id);
  }

  async function editTodo(id, item) {
    const {data} = await axios.put(`https://keep-server.herokuapp.com/todos/${id}`, item);

  }


  return (
    <div className="ui container center aligned ">
      <Form addTodo = {addTodo} />
      <List removeTodoListProp={removeTodo} list = {todoList} editTodoListProp = {editTodo}/>
    </div>
  );
}

export default App;
