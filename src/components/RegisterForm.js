import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as MultiStep from '../components/Multistep';
import styled from 'styled-components';

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
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
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

/*
*
*
*
*
*
*/
const SingupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be at least 3 charakters")
    .required('Required'),
  lastName: Yup.string()
    .min(3, "Must be at least 3 charakters")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .max(12, 'Enought!')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/, "4-12 char, one upper case letter, one lower case letter, one numeric digit")
    .required('Required'),
  confirmPassword: Yup.string()
    .min(4, 'Min 4 char')
    .max(12, 'Enought!')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/, "4-12 char, one upper case letter, one lower case letter, one numeric digit")
    .required('Required'),
  toggle: Yup.boolean()
    .oneOf([true], "Must accept terms conditions")
    .required('Required'),
  checked: Yup.boolean()
})

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
        validationSchema={SingupSchema}
        onSubmit={
          (values) => {
            console.log(values)
          }
        }
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched
        }) => (
            <StyledForm>

              <MultiStep.Page pageId={1}>
                <StyledInput
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="first_name"
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
                <StyledInput
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="last_name"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </MultiStep.Page>

              <MultiStep.Page pageId={2}>
                <StyledInput
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="email"
                />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <StyledInput
                  type="number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="phone_number"
                />
                {errors.phone && touched.phone ? (
                  <div>{errors.phone}</div>
                ) : null}
              </MultiStep.Page>

              <MultiStep.Page pageId={3}>
                <StyledInput
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <StyledInput
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  placeholder="confirm_password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div>{errors.confirmPassword}</div>
                ) : null}
              </MultiStep.Page>

              <MultiStep.Page pageId={4}>

                <StyledCheckboxes>
                  <label>
                    <Field type="checkbox" name="checked" />
                    {`Yes, I want to receive emails`}
                  </label>

                  <label>
                    <Field type="checkbox" name="toggle" />
                    {`I agree to the Terms, Privacy Policy and Fees`}
                  </label>
                  {errors.toggle && touched.toggle ? (
                    <div>{errors.toggle}</div>
                  ) : null}
                </StyledCheckboxes>

              </MultiStep.Page>

              <MultiStep.ControlsButtons />

            </StyledForm>
          )}
      </Formik>
      <MultiStep.ProgressBar />
    </MultiStep.Wrapper>
  </StyledWrapper>
)

export default RegisterForm;
