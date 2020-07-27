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
      <Register />
    </StyledWrapper>
  )
}

export default RegisterPage;