import styles from './Task.module.css'
export const Task = ({ task }: { task: string }) => {
  return (
    <div className={styles['card-task']}>
        <span>{task}</span>
        <div className={styles.actions}>
            <button className={styles.btnActions}>View</button>
            <button className={styles.btnActions}>Delete</button>
        </div>
    </div>
  )
}