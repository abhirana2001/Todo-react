import TodoItems from "./TodoItems"
import styles from "./todolist.module.css"
function TodoList({todolist,setTodolist}) {
    let sortedTodo = todolist.sort((a,b)=> Number(a.done)-Number(b.done))
    
    return (
        <div className={styles.list}>
            
       {sortedTodo.map((item,index)=>{
       return <TodoItems key={index} index={index} item={item} todolist={todolist} setTodolist={setTodolist}/>
       
       
       })}
        </div>
    )
}

export default TodoList
