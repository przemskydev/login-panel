import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
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

const SingupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .required('Required')
})

const LoginForm = ({ auth,  logged }) => {

  const [didCancel, setCancel] = useState(false);
  const history = useHistory();
  const [notLogged, setNotLogged] = useState(null);
  const { email, password } = useSelector(state => state.users);

  useEffect(() => {

    if (didCancel) {
      history.push('/')
    }

    return () => {}

  }, [didCancel, history])

  const handleSubmit = (v, callbackFn) => {

    if (email === v.email && password === v.password) {
      auth(v.email, v.password)

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify({ e: email, p: password }))
      }

      setNotLogged(true)
      console.log('notlogged still true')
    } else {
      console.log('notlogged false')
      setNotLogged(false)
    }

    callbackFn()
  }

  const handleRedirect = () => {
    setCancel(true)
  }

  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => input.addEventListener('focus', () => {
    setNotLogged(true)
  }))
  // console.log(!notLogged, !logged)
  return (
    <StyledWrapper>
      {/* {
        !notLogged && !logged ? (
          <StyledWrongData>
            <Warning />
            <h4>wrong_data: try_again</h4>
          </StyledWrongData>) : null
      } */}
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SingupSchema}
        onSubmit={
          (values, { resetForm }) => {
            handleSubmit(values, handleRedirect)
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

const mapStateToProps = ({ logged }) => ({ logged })


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);