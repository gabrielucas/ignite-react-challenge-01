import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { faker } from '@faker-js/faker'

import './App.css'

import Plus from './assets/plus.svg'
import Rocketseat from './assets/rocket.svg'
import { Input } from './components/Input/Input'
import { Tasks } from './components/Tasks/Tasks'

export interface ITask {
  id: string
  description: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState('')

  const handleNewTask: ChangeEventHandler<HTMLInputElement> = (event) =>
    setNewTask(event.target.value)

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (newTask) {
      setTasks((previousTasks) => [
        ...previousTasks,
        { description: newTask, id: faker.string.uuid(), isCompleted: false },
      ])

      setNewTask('')
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Rocketseat} alt="Rocket" />
          <span>to</span>
          <span>do</span>
        </div>
      </div>

      <main>
        <form onSubmit={handleSubmitNewTask}>
          <Input
            onChange={handleNewTask}
            placeholder="Adicione uma nova tarefa"
            value={newTask}
          />
          <button disabled={!newTask} type="submit">
            Criar
            <img src={Plus} alt="" title="Adicicionar to do" />
          </button>
        </form>

        <Tasks setTasks={setTasks} tasks={tasks} />
      </main>
    </>
  )
}

export default App
