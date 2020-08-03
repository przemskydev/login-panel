import React from 'react';
import { StyledMainWrapp, StyledContainer, StyledH1 } from '../../theme/Styled';

const GridTemplate = ({ title, children }) => {
  return (
    <StyledMainWrapp>
      <StyledContainer>
        <StyledH1>{title}</StyledH1>
      </StyledContainer>
      {children}
    </StyledMainWrapp>
  )
}

export default GridTemplate;