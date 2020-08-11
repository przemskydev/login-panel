import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout as logoutAction } from 'actions';
import { ReactComponent as ExitButton } from './logout.svg'

const StyledExit = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
`;

const StyledExitBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;



const LogoutButton = ({ logout }) => {
  const history = useHistory();

  const handleExit = () => {
    localStorage.removeItem('user');
    logout()
    history.push('/login')
  }

  return (
    <StyledExit>
      <StyledExitBtn type='button' onClick={() => handleExit()}>
        <ExitButton />
      </StyledExitBtn>
    </StyledExit>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutAction()),
  };
};

export default connect(null, mapDispatchToProps)(LogoutButton)