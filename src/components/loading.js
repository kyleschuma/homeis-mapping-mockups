import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d2e0ef;
`;

const LogoImg = styled.img`
  @keyframes fadeinout {
    0% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.2;
    }
    to {
      opacity: 0.8;
    }
  }

  color: #fff;
  height: 24em;
  width: 24em;
  opacity: 0.8;
  animation: fadeinout 3000ms infinite;
`;

export const Loading = () => (
  <Container>
    <LogoImg src={logo} />
  </Container>
);
