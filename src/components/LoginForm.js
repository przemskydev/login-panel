import React, { useState } from 'react'
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledLinkTo
} from '../theme/Styled';
import Button from '../components/Elements/Button/Button';
// import withAuth from '../hoc/withAuth';

const SingupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .required('Required')
})


const LoginForm = () => {

  const [logged, setLogged] = useState(false);
  const { email, password } = useSelector(state => state);

  const handleSubmit = (val) => {

    if (val.email === email && val.password === password) {
      setLogged(true)
    }
    console.log('Logged !')
  }
  return (
    <StyledWrapper>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SingupSchema}
        onSubmit={
          async (values, { resetForm }) => {
            await handleSubmit(values)
            resetForm();
          }
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
      <StyledLinkTo>
        Dont't have an account?<NavLink to='/register'>Create one!</NavLink>
      </StyledLinkTo>
    </StyledWrapper>
  )
}

export default LoginForm;