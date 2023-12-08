import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from 'react'
import { faker } from '@faker-js/faker'

import { Input } from '../Input'
import { Tasks } from '../Tasks'

import Plus from '../../assets/plus.svg'
import { CreateTaskButton, TaskManagerContainer } from './styles'
import { useTodoContext } from '../../context/useTodoContext/useTodoContext'

export const TaskManager = () => {
  const { setTasks } = useTodoContext()

  const [newTask, setNewTask] = useState('')

  const handleNewTask: ChangeEventHandler<HTMLInputElement> = (event) =>
    setNewTask(event.target.value)

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()

      if (newTask) {
        setTasks((previousTasks) => [
          ...previousTasks,
          { description: newTask, id: faker.string.uuid(), isCompleted: false },
        ])

        setNewTask('')
      }
    },
    [newTask, setTasks],
  )

  return (
    <TaskManagerContainer>
      <form onSubmit={handleSubmitNewTask}>
        <Input
          onChange={handleNewTask}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
        />
        <CreateTaskButton disabled={!newTask}>
          Criar
          <img src={Plus} alt="" title="Adicicionar to do" />
        </CreateTaskButton>
      </form>

      <Tasks />
    </TaskManagerContainer>
  )
}
