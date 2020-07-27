import React from 'react'
import Register from '../../components/Register'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RegisterPage = () => {
  return (
    <StyledWrapper>
      <h1>registration_form</h1>
      <Register />
    </StyledWrapper>
  )
}

export default RegisterPage;