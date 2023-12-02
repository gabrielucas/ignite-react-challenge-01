import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  memo,
  useCallback,
} from 'react'

import { Trash } from '@phosphor-icons/react'
import { TaskContainer } from './styles'
import { Checkbox } from '../Checkbox'
import { ITask } from '../TaskManager'

interface ITaskProps {
  task: ITask
  setTasks: Dispatch<SetStateAction<ITask[]>>
}

const Task: FunctionComponent<ITaskProps> = ({ task, setTasks }) => {
  const handleChangeTaskStatus = useCallback(() => {
    setTasks((previousTasks) =>
      previousTasks.map((currentTask) => {
        if (currentTask.id === task.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          }
        }

        return currentTask
      }),
    )
  }, [setTasks, task])

  const handleDeleteOneTask = useCallback(
    (selectedTask: ITask) =>
      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== selectedTask.id),
      ),
    [setTasks],
  )

  return (
    <TaskContainer checked={task.isCompleted}>
      <Checkbox
        checked={task.isCompleted}
        onChangeTasksStatus={handleChangeTaskStatus}
      />
      <p>{task.description}</p>
      <button
        onClick={() => handleDeleteOneTask(task)}
        type="button"
        title="Deletar todo"
      >
        <Trash />
      </button>
    </TaskContainer>
  )
}

export default memo(Task)
