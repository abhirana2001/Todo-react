import {faTrashCan } from "@fortawesome/free-regular-svg-icons"
import styles from "./todoitem.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import { faClipboardCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

function TodoItems({item,index,todolist,setTodolist}) {
    
    const [icon,setIcon] = useState(faTrashCan)
   function changeBtn(){
  setIcon(faTrashAlt)

   }
   function reverseBtn(){
    setIcon(faTrashCan)
  
     }
     function deleteTodo(e){
   let del = todolist.filter((item,ind)=>{
      
    return ind !== index

   }
  
   )
   setTodolist(del)
     }
     function todoDone(){
   const newTodolist= todolist.map((item,ind)=> ind===index?{...item,done:!item.done}:item)
    setTodolist(newTodolist)
     }
    const todoComplete= item.done? <FontAwesomeIcon icon={faClipboardCheck} size="xl" style={{color: "#bdb76b",}} />:""
    
    return (
        <div className={styles.item}>
           <div className={styles.itemName} key={index} ><span className={styles.todoComplete}>{todoComplete}</span><span onClick={todoDone} >{item.name}{index}</span> <FontAwesomeIcon className={styles.deleteBtn} onMouseOut={reverseBtn} onClick={deleteTodo} onMouseOver={changeBtn} icon={icon} size="xl" style={{color: "#bdb76b",}} /></div>
        </div>
    )
}

export default TodoItems
