import styled from "styled-components"

const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;

    & li + li {
      margin-top: 1rem;
    }
  }
`

const TasksHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export { TasksContainer, TasksHeader }
