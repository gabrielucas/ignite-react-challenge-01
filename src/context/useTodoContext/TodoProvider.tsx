import { useState } from 'react'
import { ITask } from '../../@types/commons/interfaces/ITask'
import { TodoContext } from './TodoContext'

export const TodoProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  return (
    <TodoContext.Provider value={{ setTasks, tasks }}>
      {children}
    </TodoContext.Provider>
  )
}
