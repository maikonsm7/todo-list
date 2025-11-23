import { useState } from 'react'
import './App.css'
import { Task } from './components/Task'

function App() {
  const [tasks, setTasks] = useState<string[]>(JSON.parse(localStorage.getItem('tasks') || '[]'))
  const [task, setTask] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTasks([...tasks, task])
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
    setTask('')
  }

  return (
    <>
      <h2>ToDo List</h2>
      <form onSubmit={handleSubmit} className="form-task">
        <input type="text" placeholder="Add a new task" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit">Add</button>
      </form>

        {tasks.map((t, index) => (
          <Task key={index} task={t} />
        ))}

    </>
  )
}

export default App
