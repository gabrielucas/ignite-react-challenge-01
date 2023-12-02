import { Dispatch, FunctionComponent, SetStateAction, useMemo } from 'react'

import { Counter } from '../Counter/Counter'
import { NoTasks } from '../NoTasks/NoTasks'
import { TasksContainer, TasksHeader } from './tasks.styles'
import { Task } from '../Task/Task'
import { ITask } from '../../App'

interface ITasksProps {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const Tasks: FunctionComponent<ITasksProps> = ({ tasks, setTasks }) => {
  const completedTasks = useMemo(() => {
    const amount = tasks.filter((task) => task.isCompleted)?.length
    return amount
  }, [tasks])

  return (
    <TasksContainer>
      <TasksHeader>
        <Counter title="Tarefas criadas" type="created" value={tasks?.length} />
        <Counter
          title="Tarefas concluídas"
          type="completed"
          value={`${completedTasks} de ${tasks?.length}`}
        />
      </TasksHeader>
      {tasks?.length ? (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} setTasks={setTasks} task={task} />
          ))}
        </ul>
      ) : (
        <NoTasks />
      )}
    </TasksContainer>
  )
}
