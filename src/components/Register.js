import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 1px solid red;
  min-height: 70vh;
  width: 60vw;
  display: grid;
  grid-template-columns: 200px auto;
`;

const StyledContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  border-right: 1px solid yellow;
`;

const Register = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        Hey
      </StyledContainer>
    </StyledWrapper>
  )
}

export default Register;