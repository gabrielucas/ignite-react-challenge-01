import { Fragment, FunctionComponent } from 'react'

import { Header } from '../components/Header'
import { TaskManager } from '../components/TaskManager'

export const Home: FunctionComponent = () => (
  <Fragment>
    <Header />
    <TaskManager />
  </Fragment>
)
