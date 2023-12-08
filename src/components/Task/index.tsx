import { FunctionComponent, memo, useCallback } from 'react'

import { Trash } from '@phosphor-icons/react'
import { TaskContainer } from './styles'
import { Checkbox } from '../Checkbox'
import { ITask } from '../../@types/commons/interfaces/ITask'
import { useTodoContext } from '../../context/useTodoContext/useTodoContext'

interface ITaskProps {
  task: ITask
}

const Task: FunctionComponent<ITaskProps> = ({ task }) => {
  const { setTasks } = useTodoContext()

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

  // const saveInDB = useCallback(async () => {
  //   try {
  //     await createTasksInDatabase(tasks)
  //     setTasks(null)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [setTasks, tasks])

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
