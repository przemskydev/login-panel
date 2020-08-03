import React from 'react';
import GridTemplate from '../Templates/GridTemplate';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <GridTemplate title="login_here">
      <LoginForm />
    </GridTemplate>
  )
}

export default LoginPage;