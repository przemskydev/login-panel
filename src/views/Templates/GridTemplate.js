import React from 'react';
import { StyledMainWrapp, StyledContainer, StyledH1 } from '../../theme/Styled';

const GridTemplate = ({ title, children }) => {
  return (
    <StyledMainWrapp>
      <StyledContainer>
        <StyledH1>
          <h1>{title}</h1>
        </StyledH1>
      </StyledContainer>
      {children}
    </StyledMainWrapp>
  )
}

export default GridTemplate;