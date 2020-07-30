import styled from 'styled-components';
import { Form } from 'formik';

const StyledWrapper = styled.div`
  right: 0;
  top: 0;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid red;
  color: red;
  font-size: 2rem;
  letter-spacing: 2px;
  
  ::placeholder {
    letter-spacing: 2px;
    font-size: 1.1rem;
    color: red;
  }
  /* hide number input arrows */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;

  label {
    height: 40px;
    margin-top: 30px;
  }
`;

const StyledLinkTo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin: 10px;
    text-decoration: none;
    color: red;
    font-weight: 700;
    transition: letter-spacing .8s ease-in-out;
  }

  a:hover {
    text-decoration: underline;
    letter-spacing: 2px;
  }
`;

export {
  StyledWrapper,
  StyledForm,
  StyledLinkTo,
  StyledInput,
  StyledCheckboxes
}