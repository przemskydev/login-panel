import React from 'react'
import { Formik } from 'formik';
import {
  StyledWrapper,
  StyledForm,
  StyledInput
} from '../theme/Styled';
import Button from '../components/Elements/Button/Button';
import withAuth from '../hoc/withAuth';


const LoginForm = ({ handleLogin }) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        // validationSchema={SingupSchema}
        onSubmit={(values) =>
          handleLogin(values)
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

              <Button
                type='submit'
              >
                Login
              </Button>

            </StyledForm>

          )}
      </Formik>
    </StyledWrapper>
  )
}

export default withAuth(LoginForm);