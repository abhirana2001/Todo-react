import React from 'react'
import styles from "./header.module.css"
function Header() {
    return (
        <>
       
        <div className={styles.header}>
           My ToDo List 
        </div>
         <div className={styles.fakeheader}></div>
   </> )
}

export default Header
