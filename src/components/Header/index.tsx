import Rocketseat from '../../assets/rocket.svg'

import { HeaderContainer, LogoContainer } from './styles'

export const Header = () => (
  <HeaderContainer>
    <LogoContainer>
      <img src={Rocketseat} alt="Rocket" />
      <span>to</span>
      <span>do</span>
    </LogoContainer>
  </HeaderContainer>
)
