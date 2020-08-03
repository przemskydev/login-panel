import React from 'react'
import { Formik, Field } from 'formik';
import {
  StyledWrapper,
  StyledForm,
  StyledLinkTo,
  StyledInput,
  StyledCheckboxes
} from '../theme/Styled';


const LoginForm = () => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        // validationSchema={SingupSchema}
        onSubmit={(values) =>
          console.log(values)
          // async (values, { resetForm }) => {
          //   if (!didCancel) {
          //     await handleSubmit(values)
          //       .then(setDone(!done))
          //     resetForm();
          //   }
          // }
        }
      >

        {({
          values,
          handleChange,
          handleBlur,
        }) => (

            <StyledForm>

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

            </StyledForm>

          )}
      </Formik>
    </StyledWrapper>
  )
}

export default LoginForm;