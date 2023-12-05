import { httpClient } from '../../../infra/httpClient'
import { ITask } from './interfaces/ITask'

export const getTasks = async (): Promise<ITask[]> => {
  const { data } = await httpClient.get('/tasks')
  return data
}
