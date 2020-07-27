import React from 'react'
import { Formik, Form } from 'formik';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  right: 0;
  top: 0;
  padding: 100px 90px;
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
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
           <input
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
             placeholder="first_name"
           />

           <input
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
             placeholder="last_name"
           />

           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             placeholder="email"
           />

           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             placeholder="password"
           />

           <input
             type="number"
             name="phone"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.phone}
             placeholder="phone_number"
           />

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </StyledForm>
       )}
     </Formik>
   </StyledWrapper>
)

export default RegisterForm;
