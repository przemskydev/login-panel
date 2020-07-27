import React from 'react'
import { Formik, Form, Field } from 'formik';
import Button from '../components/Elements/Button/Button';
import * as MultiStep from '../components/Multistep';
import styled from 'styled-components';

/*
*
*
*
*
*
*/

const StyledWrapper = styled.div`
  right: 0;
  top: 0;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    font-size: 1rem;
    color: red;
  }
  /* hide number input arrows */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`;


/*
*
*
*
*
*
*/

const RegisterForm = () => (
  <StyledWrapper>
    <MultiStep.Wrapper>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          toggle: false,
          checked: false,
        }}
        // onSubmit={
        //   (values) => {
        //     console.log(values)
        //   }
        // }
      >
        {({
          values,
          handleChange,
          handleBlur,
        }) => (
            <StyledForm>
              <StyledInput
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="first_name"
              />

              <StyledInput
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="last_name"
              />

              <StyledInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email"
              />

              <StyledInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="password"
              />

              <StyledInput
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder="confirm_password"
              />

              <StyledInput
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="phone_number"
              />

              <label>
                <Field type="checkbox" name="checked" />
                {`Yes, I want to receive emails`}
              </label>

              <label>
                <Field type="checkbox" name="toggle" />
                {`I agree to the Terms, Privacy Policy and Fees`}
              </label>

              {/* <StyledButtons>
                <Button>Prev</Button>
                <Button>Next</Button>
              </StyledButtons> */}

              {/* <Button type="submit">
                Submit
              </Button> */}
              <MultiStep.ControlsButtons />

            </StyledForm>
          )}
      </Formik>
    </MultiStep.Wrapper>
  </StyledWrapper>
)

export default RegisterForm;
