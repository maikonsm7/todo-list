import styles from './Task.module.css'
export const Task = (
    { task, removeTask, taskCompleted } : { task: { title: string, completed: boolean },
    removeTask: () => void,
    taskCompleted: () => void
}) => {
  return (
    <div className={styles['card-task']}>
        <span className={task.completed ? styles.through : ''}>{task.title}</span>
        <div className={styles.actions}>
            <button className={styles.btnActions} onClick={() => taskCompleted()}>{task.completed ? 'Completed' : 'Incomplete'}</button>
            <button className={styles.btnActions} onClick={() => removeTask()}>Delete</button>
        </div>
    </div>
  )
}