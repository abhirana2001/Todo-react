import { useState } from "react";
import styles from "./form.module.css"
function Form({todolist,setTodolist}) {
    const [todo ,setTodo] = useState({name:"",done:false});
    
    function handleSubmit(e) {
        e.preventDefault();
        if(todo.name !== ""){
        setTodolist([todo,...todolist])
        setTodo({name:"",done:false})
        }
        }
       
    
    return (
        <div>
           <form className={styles.todoform} onSubmit={handleSubmit}>
        <input placeholder="Enter To-Do item...." className={styles.modinput} onChange={(e)=> setTodo({name:e.target.value,done:false})}  type="text" value={todo.name}/>
        <input className={styles.modsubmit}  type="submit" value="ADD" />  
       
        </form>   
        </div>
    )
}

export default Form
