import { useState } from 'react'
import './App.css'
import { Task } from './components/Task'

function App() {
  type Task = {
    title: string,
    completed: boolean
  }
  
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[{}]'))
  const [task, setTask] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTasks([...tasks, { title: task, completed: false }])
    localStorage.setItem('tasks', JSON.stringify([...tasks, { title: task, completed: false }]))
    setTask('')
  }

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  const taskCompleted = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <>
      <h2>ToDo List</h2>
      <form onSubmit={handleSubmit} className="form-task">
        <input type="text" placeholder="Add a new task" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>

        {tasks.map((t, index) => (
          <Task key={index} task={t} removeTask={() => removeTask(index)} taskCompleted={() => taskCompleted(index)} />
        ))}

    </>
  )
}

export default App
