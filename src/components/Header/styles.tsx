import styled from 'styled-components';
import mobileHeader from '../../images/bg-header-mobile.svg';
import desktopHeader from '../../images/bg-header-desktop.svg';

export const Container = styled.div`
  background: hsl(180, 29%, 50%) url(${mobileHeader}) no-repeat;
  height: 150px;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    background: hsl(180, 29%, 50%) url(${desktopHeader}) no-repeat;
  }
`;
