import React from 'react';
import styled from 'styled-components';
import Home from '../Templates/Home';
import {
  StyledHome
} from '../../theme/Styled';

const StyledHomeHeader = styled.h1`
  padding: 20px;
`;

const MaginPage = () => {

  return (
    <StyledHome>
      <StyledHomeHeader>Hello there!</StyledHomeHeader>
      <Home />
    </StyledHome>
  )
}

export default MaginPage;