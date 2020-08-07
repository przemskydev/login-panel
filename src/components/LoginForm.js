import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { auth as authAction } from 'actions';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledLinkTo
} from '../theme/Styled';
import Button from "./Elements/Button/Button";
import WrongData from "./WrongData";


const SingupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .required('Required')
})

const LoginForm = ({ auth, logged }) => {

  const [didCancel, setCancel] = useState(false);
  const history = useHistory();
  const [isntLogged, setLogged] = useState(true);
  const { email, password, firstName, lastName } = useSelector(state => state.users);

  useEffect(() => {
    if (didCancel) {
      history.push('/')
    }
  }, [didCancel, history])

  useEffect(() => {
    return () => { }
  }, [])

  const handleSubmit = (v, callbackFn) => {

    if (email === v.email && password === v.password) {
      auth(v.email, v.password)

      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify({ email, password, firstName, lastName }))
      }

      setLogged(true)
      callbackFn()

    } else {
      setLogged(false)
    }
  }

  const handleRedirect = () => {
    setCancel(true)
  }

  document.querySelectorAll('input')
    .forEach(input => input.addEventListener('focus',
      () => {
        setLogged(true)
      })
    )

  return (
    <StyledWrapper>
      <WrongData isntLogged={isntLogged} logged={logged} />

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

LoginForm.propTypes = {
  auth: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (email, password) => dispatch(authAction(email, password)),
  };
};

const mapStateToProps = ({ logged }) => ({ logged })


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);