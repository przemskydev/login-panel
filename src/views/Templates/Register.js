import React from 'react';
import { StyledMainWrapp, StyledContainer, StyledH1 } from '../../theme/Styled';
// import RegisterForm from '../../components/RegisterForm';



const Register = ({ title, children }) => {
  return (
    <StyledMainWrapp>
      <StyledContainer>
        <StyledH1>{title}</StyledH1>
      </StyledContainer>
      {/* <RegisterForm /> */}
      {children}
    </StyledMainWrapp>
  )
}

export default Register;