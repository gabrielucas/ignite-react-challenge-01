import { memo } from "react"
import { NoTasksContainer } from "./no-tasks.styles"

import { ClipboardText } from "@phosphor-icons/react"

export const NoTasks = memo(() => {
  return (
    <NoTasksContainer>
      <ClipboardText size={56} fill="#333333" />

      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </NoTasksContainer>
  )
})
