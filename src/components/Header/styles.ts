import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 12.5rem;

  background: ${({ theme }) => theme['--gray-700']};

  display: flex;
  justify-content: center;
`

export const LogoContainer = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    margin-right: 0.75rem;
  }

  span {
    font-weight: 900;
    font-size: 2.5rem;
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme['--blue']};
  }

  &:nth-child(3) {
    color: ${({ theme }) => theme['--purple-dark']};
  }
`
