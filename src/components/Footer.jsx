import styles from "./footer.module.css"
function Footer({doneCount,totalTodo}) {
    return (<>
    <div className={styles.fakefooter}>

    </div>
        <div className={styles.footer}>
          <span className={styles.fitem}>Completed Todo  :  {doneCount}</span>
          <span className={styles.fitem}>Total Todo : {totalTodo}</span>
        </div>
   </> )
}

export default Footer
