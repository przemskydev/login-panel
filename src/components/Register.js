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
  border-right: 1px solid red;
  position: relative;
`;

const StyledH1 = styled.h1`
  transform: rotateZ(-90deg);
  position: absolute;
  top: 32%;
  left: -93%;
  font-size: 9rem;
`;


const Register = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledH1>registration</StyledH1>
      </StyledContainer>
      <h1>form</h1>
    </StyledWrapper>
  )
}

export default Register;