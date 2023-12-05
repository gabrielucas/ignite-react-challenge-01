import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { faker } from '@faker-js/faker'

import { Input } from '../Input'
import { Tasks } from '../Tasks'

import Plus from '../../assets/plus.svg'
import { CreateTaskButton, TaskManagerContainer } from './styles'
import { getTasks } from './API/getTasks'
import { ITask } from './API/interfaces/ITask'

export const TaskManager = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTask, setNewTask] = useState('')

  const handleGettingTasks = useCallback(async () => {
    try {
      const tasksInCache = await getTasks()
      setTasks(tasksInCache)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    handleGettingTasks()
  }, [handleGettingTasks])

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
    [newTask],
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

      <Tasks setTasks={setTasks} tasks={tasks} />
    </TaskManagerContainer>
  )
}
