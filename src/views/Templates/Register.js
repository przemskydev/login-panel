import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../../components/RegisterForm';

const StyledWrapper = styled.div`
  margin-top: 10rem;
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
  top: 38%;
  left: -78%;
  font-size: 6rem;
`;


const Register = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledH1>registration_form</StyledH1>
      </StyledContainer>
      <RegisterForm />
    </StyledWrapper>
  )
}

export default Register;