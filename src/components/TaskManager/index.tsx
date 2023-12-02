import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import {faker} from '@faker-js/faker'

import { Input } from '../Input/Input'
import { Tasks } from '../Tasks/Tasks'

import Plus from '../../assets/plus.svg'
import { CreateTaskButton, TaskManagerContainer } from './styles'

export interface ITask {
    id: string
    description: string
    isCompleted: boolean
  }

export const TaskManager = () => {
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
    <TaskManagerContainer>
      <form onSubmit={handleSubmitNewTask}>
        <Input
          onChange={handleNewTask}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
        />
        <CreateTaskButton disabled={!newTask} >
          Criar
          <img src={Plus} alt="" title="Adicicionar to do" />
        </CreateTaskButton>
      </form>

      <Tasks setTasks={setTasks} tasks={tasks} />
    </TaskManagerContainer>
  )
}
