import React from 'react';
import PropTypes from 'prop-types';
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

GridTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default GridTemplate;