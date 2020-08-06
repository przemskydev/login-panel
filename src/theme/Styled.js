import styled from 'styled-components';
import { Form } from 'formik';

const StyledWrapper = styled.div` 
  overflow: hidden;
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
  /* justify-content: center; */
  align-items: center;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const StyledMultistepWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledProgress = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const StyledErrMesssage = styled.div`
  height: 10px;
`;

const StyledMainWrapp = styled.div`
  border: 1px solid red;
  height: 80vh;
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

const StyledH1 = styled.div`
  transform: rotate(-90deg);
  position: relative;
  top: 75%;
  left: 10%;
  
  h1 {
    position: absolute;
    font-size: 3em;
    margin: 0;
    
  }
`;

const StyledWrongData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  padding: 10px;  
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  h4 {
    margin: 10px 0 0 0;
  }
`;

export {
  StyledWrapper,
  StyledForm,
  StyledLinkTo,
  StyledInput,
  StyledCheckboxes,
  StyledMultistepWrap,
  StyledButtons,
  StyledProgress,
  StyledErrMesssage,
  StyledMainWrapp,
  StyledContainer,
  StyledH1,
  StyledWrongData
}