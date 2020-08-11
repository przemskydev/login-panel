import React from 'react';
import styled from 'styled-components';
import Home from '../Templates/Home';
import LogoutButton from '../../assets/LogoutButton'
import {
  StyledHome
} from '../../theme/Styled';

const StyledHomeHeader = styled.h1`
  padding: 20px;
  margin: 0;
  text-align: center;
`;

const MaginPage = () => {

  return (
    <StyledHome>
      <LogoutButton />
      <StyledHomeHeader>Hello there!</StyledHomeHeader>
      <Home />
    </StyledHome>
  )
}

export default MaginPage;