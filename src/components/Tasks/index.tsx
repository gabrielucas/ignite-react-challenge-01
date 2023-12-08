import { FunctionComponent, useMemo } from 'react'

import { Counter } from '../Counter'
import { TasksContainer, TasksHeader } from './styles'
import Task from '../Task'
import NoTasks from '../NoTasks'
import { useTodoContext } from '../../context/useTodoContext/useTodoContext'

export const Tasks: FunctionComponent = () => {
  const { tasks } = useTodoContext()

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
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <NoTasks />
      )}
    </TasksContainer>
  )
}
