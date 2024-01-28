import { useState } from "react"
import TodoItems from "./TodoItems";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";


 function Todo() {
   const [todolist,setTodolist] = useState([])
   let doneCount = todolist.filter((item)=> item.done ).length
   let totalTodo = todolist.length
    return (
        <div>
            <Form todolist={todolist} setTodolist={setTodolist} />
       <TodoList todolist={todolist} setTodolist={setTodolist}/>
       <Footer doneCount={doneCount} totalTodo={totalTodo}/>
        </div>
    )
}

export default Todo
