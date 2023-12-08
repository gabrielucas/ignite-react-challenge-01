import { Dispatch, SetStateAction, createContext } from 'react'
import { ITask } from '../../@types/commons/interfaces/ITask'

export interface ITodoContext {
  tasks: ITask[]
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

export const TodoContext = createContext<ITodoContext>({
  setTasks: () => {},
  tasks: [],
})
