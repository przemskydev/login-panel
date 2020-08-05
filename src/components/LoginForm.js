import React, { useState } from 'react'
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { history } from '../history/index';
import { auth as authAction } from 'actions';
import * as Yup from 'yup';
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledLinkTo,
  StyledWrongData
} from '../theme/Styled';
import Warning from '../assets/warn'
import Button from "./Elements/Button/Button";
// import withAuth from '../hoc/withAuth';

const SingupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .required('Required')
})


const LoginForm = ({ auth }) => {

  const [notLogged, setNotLogged] = useState(true);
  const { email, password } = useSelector(state => state.users);
  const { logged } = useSelector(state => state)

  const handleSubmit = (v) => {

    if (email === v.email && password === v.password) {
      auth(v.email, v.password)

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify({ e: email, p: password }))
      } 
      history.push('/');
      setNotLogged(true)
    } else {
      setNotLogged(false)
    }

  }


  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.addEventListener('focus', () => {
    setNotLogged(true)
  }))


  return (
    <StyledWrapper>
      {
        !notLogged && !logged ? (
          <StyledWrongData>
            <Warning />
            <h4>wrong_data: try_again</h4>
          </StyledWrongData>) : null
      }
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SingupSchema}
        onSubmit={
          async (values, { resetForm }) => {
            // await handleSubmit(values)
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
        do not have an account?<NavLink to='/register'>create_one</NavLink>
      </StyledLinkTo>
    </StyledWrapper >
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password) => dispatch(authAction(email, password)),
  };
};


export default connect(null, mapDispatchToProps)(LoginForm);