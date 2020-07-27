import React from 'react'
import { Formik, Form } from 'formik';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  right: 0;
  top: 0;
  padding: 100px 90px;
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
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  text-decoration: none;
  padding: 0;
  margin-top: 50px;
  width: 220px;
  height: 47px;
  border: 1px solid red;
  background-color: transparent;
`;


const RegisterForm = () => (
  <StyledWrapper>
     <Formik
       initialValues={{ 
         firstName: '',
         lastName: '',
         email: '', 
         password: '',
         phone: '',
        }}
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
         isSubmitting,
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
             type="number"
             name="phone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}
             placeholder="phone_number"
           />

           <StyledButton type="submit" disabled={isSubmitting}>
             Submit
           </StyledButton>
         </StyledForm>
       )}
     </Formik>
   </StyledWrapper>
)

export default RegisterForm;
